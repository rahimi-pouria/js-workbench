const tabs = [
    {
      id: 1,
      title: "JavaScript",
      titleContent: 'JavaScript',
      content: "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, garbage-collected, dynamic language, supporting multiple paradigms such as imperative, functional, and object-oriented."
    },
    {
      id: 2,
      title: "React",
      titleContent: 'react.js',
      content: "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps."
    },
    {
      id: 3,
      title: "Vue",
      titleContent: 'vue.js',
      content: "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity."
    },
    {
      id: 4,
      title: "Node.js",
      titleContent: 'Node.js',
      content: "Learn Node.jsWelcome to the Node.js learning resources. Whether you're just getting started or looking to deepen your knowledge, these guides cover everything from the basics to advanced topics."
    }
  ];

let showTab = 0

const createTabs = (data) => {
      const tabsContainer = document.getElementById('tabs')
      const div = document.createElement('div')
      div.classList.add('headerTabs')

      tabsContainer.appendChild(div)
      const divContent = document.createElement('div')
      divContent.classList.add('content')
      const divTabContent = document.createElement('div')
      divTabContent.classList.add('tab-content')
      const heading = document.createElement('h2')
      heading.classList.add('tab-content-title')
      heading.textContent = data[0].titleContent
      divTabContent.appendChild(heading)
      const p = document.createElement('p')
      p.classList.add('tab-content-description')
      p.textContent = data[0].content
      divTabContent.appendChild(p)
      divContent.appendChild(divTabContent)
      tabsContainer.appendChild(divContent)

      data.forEach((item, index) => {
      const button = document.createElement('button')
      button.classList.add('tab-button')
      button.textContent = item.title
      div.appendChild(button)
      if(index === showTab){
        button.classList.add('active')
      }
      
      button.addEventListener('click', () => {
        showTab = index
          heading.textContent = item.titleContent
          p.textContent = item.content
          document.querySelectorAll('.tab-button').forEach((btn) => btn.classList.remove('active'))
          button.classList.add('active')
      }) 
    })

}

createTabs(tabs)

