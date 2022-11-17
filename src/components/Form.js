import React, { useEffect } from 'react';
import { useState } from 'react';
import '../style/form.css'

const Form = () => {

  const [job, setJob] = useState('')
  const [jobList, setJobList] = useState([])
  const [editJobIndex, setEditJobIndex] = useState()
  const [editJob, setEditJob] = useState()

  useEffect(() => {
    setEditJob(jobList.find((job, index) => index === editJobIndex))
  }, [editJobIndex])

  const handleSubmit = () => {
    setJobList(prev => [...prev, { content: job, status: 'Not Done' }])
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
        return { ...abc, status: abc.status === 'Done' ? 'Not Done' : 'Done' }
      } else {
        return abc
      }
    }))
  }

  // console.log(editJobIndex)
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
          placeholder="What things you are gonna do?"
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
                value={editJob?.content || ''}
                onKeyDown={handleUpdateJobList}
                onChange={e => setEditJob({ ...editJob, content: e.target.value })} />
              :
              <div className='job-list'>{job.content}</div>
            }
            <button
              className='delete'
              onClick={() => handleDelete(index)}>
              Delete
            </button>
            <button
              className={job.status === 'Done' ? 'done' : 'not-done'}
              onClick={() => handleDone(index)}>
              {job.status === 'Done' ? 'Done' : 'Not'}
            </button>
          </div>
        ))}
      </div>
      {/* <div className='line-bottom'></div> */}
      {/* summary job status */}
      {/* <div className='sum-status'>
        <span className='sum_total'>Total Job: 10</span>
        <span className='sum_not-done'>Not-done Job: </span>
        <span className='sum_done'>Done Job: </span>
      </div> */}
    </div>
  )
}

export default Form
