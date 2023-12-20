import Navigate from '../Navigate'
import { useState, useEffect, useRef } from 'react';
import './Heading.css'
import { Link } from 'react-router-dom';

function Header(props) {
  // console.log('props', props.title)
  return (
    <header>
      <h1><a href='/' onClick={(event) => {
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  )
}

function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  )
}

function Nav(props) {
  const lis = [
    
  ]
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={'/read/'+t.id} onClick={event=>{
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));
    }}>{t.title}</a></li>)
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  )
}
function Create(props) {
  return (
    <article>
      <h2>create</h2>
      <form onSubmit={event=>{
        event.preventDefault();
        const title = event.target.title.value;
        const body = event.target.body.value;
      }}>
        <p><input type='text' name='title' placeholder='title'></input></p>
        <p><textarea type='text' name='body' placeholder='body'></textarea></p>
        <p><input type='submit' value='create'></input></p>
      </form>
    </article>
  )
}

export default function Heading() {
  const [clear, setClear] = useState(false);
  const [mode, setMode] = useState('welcome');
  const [num, setNum] = useState(null);
  const [topics, setTopics] = useState(
    [
      {
        id:1, title:'html', body:'html is '
      },
      {
        id:2, title:'css', body:'css is '
      },
      {
        id:3, title:'js', body:'js is '
      }
    ]
  )
  function onClick() {
    if (clear === false) {
      document.getElementById('nav').className='navShown'
      setClear(!clear);
    } else {
      document.getElementById('nav').className='navHidden'
      setClear(!clear);
    }
  }

  let content = null;
  if (mode === 'welcome') {
    content = <Article title='welcome' body='we'></Article>
  } else if (mode === 'read') {
    let title, body = null;
    for (let i=0; i<topics.length; i++) {
      if (topics[i].id === num) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  } else if (mode === 'create') {
    content = <Create onCreate={(title, body)=>{
      const newTopic = {title:title, body:body}
      const newTopics = [...topics, newTopic];
      setTopics(newTopics)
    }}></Create>
  }
    return (
      <div>
        <Navigate />
        <div className='page'>
          <br />
          <div className='side'>
          <button onClick={() => onClick()}>sides</button>
            <div id='nav' className='nav'>
              <Link to='/cf'>
                &#127760;
                <br />
                nav
              </Link>
              <div>
                &#127760;
                <br />
                navigate
              </div>
              <div>
                &#127760;
                <br />
                navigate
              </div>
            </div>
          </div>
          <div className='centered'>
            <h1 className='centered'>START PAGE</h1>
            <p className='centered'>Template by me</p>
            <button>Get Started</button>
          </div>
        </div>
        <Header title='react' onChangeMode={
          () => {setMode('welcome')}
        }></Header>
        <Nav topics={topics} onChangeMode={(idValue) => {
          setMode('read');
          setNum(idValue);
          console.log(num);
        }}></Nav>
        <Article title='welcome' body='we'></Article>
        {content}
        <a href='/create' onClick={event=>{
          event.preventDefault();
          setMode('create');
        }}>create</a>
    </div>
  );
}