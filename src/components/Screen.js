import ReactMarkdown from 'react-markdown';
import React from 'react';

const Screen = ({data}) => {
    console.log(data);
  return (
    <div className='output for'>
      <p className='screen_textarea textarea' type='text'>
        <ReactMarkdown>
            {data}
        </ReactMarkdown>
      </p>
    </div>
  )
}

export default Screen
