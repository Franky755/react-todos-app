import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import '../style/form.css'

const Form = () => {

  const [job, setJob] = useState('')
  const [jobList, setJobList] = useState([])
  const [editJobIndex, setEditJobIndex] = useState()
  const [editJob, setEditJob] = useState()
  const [data, setData] = useState({ hits: [] });
  const [showGoToTop, setShowGoToTop] = useState(false)

  // Call API faker Job List
  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/todos',
      );
      console.log(result)
      setJobList(result.data)
    }
    fetchData();
  }, []);


  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoToTop(true)
      } else {
        setShowGoToTop(false)
      }
      // console.log(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

  }, []
  )

  useEffect(() => {
    setEditJob(jobList.find((job, index) => index === editJobIndex))
  }, [editJobIndex])

  const handleSubmit = () => {
    setJobList(prev => [...prev, { title: job, completed: 'Not Done' }])
    setJob('')
  }

  const handleKeypress = e => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleDelete = (index) => {
    setJobList(jobList.filter((abc, i) => i !== index))
  }

  const handleUpdateJobList = (e) => {
    if (e.keyCode === 13) {
      setJobList(jobList.map((job, index) => index === editJobIndex ? editJob : job))
      setEditJobIndex(null)
    }
  }

  const handleDone = (index) => {
    setJobList(jobList.map((abc, i) => {
      if (index === i) {
        return { ...abc, completed: abc.completed === 'Done' ? 'Not Done' : 'Done' }
      } else {
        return abc
      }
    }))
  }


  return (
    <div className='form-container'>
      {/* form title */}
      <div className='form-title'>
        <h1>Todos</h1>
        <br />
        <br />
        <input
          className='input'
          value={job}
          onChange={e => setJob(e.target.value)}
          onKeyPress={handleKeypress}
          placeholder="What things you are wanna do?"
          focus=""
        />
        <div className='line'></div>
        <br />
      </div>
      {/* list job body */}
      <div className='list-job-container'>
        {jobList.map((job, index) => (
          <div className='form-body' key={index} onDoubleClick={() => setEditJobIndex(index)}>
            {index === editJobIndex ?
              <input
                className='new-input'
                type="text"
                value={editJob?.title || ''}
                onKeyDown={handleUpdateJobList}
                onChange={e => setEditJob({ ...editJob, title: e.target.value })} />
              :
              <div className='job-list'>{job.title}</div>
            }
            <button
              className='delete'
              onClick={() => handleDelete(index)}>
              Delete
            </button>
            <button
              className={job.completed === 'Done' ? 'done' : 'not-done'}
              onClick={() => handleDone(index)}>
              {job.completed === 'Done' ? 'Done' : 'Not'}
            </button>
          </div>
        ))}
      </div>
      <div className='line-bottom'></div>
      {/* summary job statuss */}
      <div className='sum-status'>
        <span className='sum_total'>Total Job: 10</span>
        <span className='sum_not-done'>Not-done Job: </span>
        <span className='sum_done'>Done Job: </span>
      </div>
      {showGoToTop && (
        <button
          style={{
            position: 'fixed',
            right: 20,
            bottom: 20,
          }}
        >
          Go to Top
        </button>
      )}
    </div>
  )
}

export default Form
