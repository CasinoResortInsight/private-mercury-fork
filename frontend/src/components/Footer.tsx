import React from 'react'

export default function Footer() {
  return (
    <footer
      className='footer'
      style={{
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '40px',
        lineHeight: '40px',
        backgroundColor: '#f5f5f5',
        borderTop: '1px solid #e5e5e5',
      }}
    >
      <div className='container'>
        <span className='text-muted'>
          Casino Resort Insight ©{'2022'}
          <a
            style={{ textDecoration: 'none' }}
            href='https://casinoresortinsight.com'
            target='_blank'
            rel='noreferrer'
          ></a>
        </span>
      </div>
    </footer>
  )
}
