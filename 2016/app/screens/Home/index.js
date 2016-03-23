import React from 'react'
import { Link } from 'react-router'
import About from 'components/About'
import Avatar from 'components/Avatar'
import Button from 'components/Button'
import Legend from 'components/Legend'

export default () => {
  return (
    <div className="Home">
      <div>
        <h2>What is React Rally?</h2>
        <About />
        <Link to="/about" className="Button medium">More about React Rally &raquo;</Link>
      </div>
      <div className="align-center">
        <Legend>Keynote Speakers</Legend>
        <Avatar
          name="Ryan Florence"
          title="Co-founder, React Training"
          url="https://avatars0.githubusercontent.com/u/100200"
          twitter="https://twitter.com/ryanflorence"
          github="https://github.com/ryanflorence"
        />
        <Avatar
          name="Marcy Sutton"
          title="Sr. Front-End Engineer, Deque Systems"
          url="https://avatars0.githubusercontent.com/u/1045233"
          twitter="https://twitter.com/marcysutton"
          github="https://github.com/marcysutton"
        />
      </div>
    </div>
  )
}