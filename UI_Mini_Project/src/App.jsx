import React from 'react'
import Section1 from './Components/Section1/Section1'
// import Section2 from './Components/Section2/Section2'
const App = () => {
  const users = [
    {img :'https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=759&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      intro:'I am a curious and motivated individual who enjoys learning new things and exploring different ideas. I focus on improving my skills, solving problems, and growing through new experiences.' ,
       tag:'Satisfied',
       color:'royalblue-600'
    },
    {img :'https://plus.unsplash.com/premium_photo-1674338454765-cfbe93319eb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D' ,
      intro:'I am an enthusiastic person who values growth, learning, and hard work. I enjoy gaining new skills, exploring technology, and constantly improving myself.' ,
       tag:'Underserved',
       color:'orange-600'
    },
    {img :'https://plus.unsplash.com/premium_photo-1672691613196-99583588f22c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
      intro:'Hello, I am a dedicated learner with a passion for knowledge and creativity. I like discovering new opportunities, developing my abilities, and working toward meaningful goals.' ,
       tag:'Underbanked',
       color:'green-600'
    },
       {img :'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D' ,
      intro:'I am an unsatisfied customer who is looking for better services and solutions.' ,
       tag:'Unsatisfied',
       color:'red-600'
    },
        {img :'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D' ,
      intro:'I am an average customer who is looking for better services and solutions.' ,
       tag:'Average',
       color:'gray-600'
    }

  ]
  return (
    <div>
      <Section1 users={users} />
      {/* <Section2 /> */}
    </div>
  )
}

export default App
