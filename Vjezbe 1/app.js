
  const student = (props) =>{
       console.log(props);
       return React.createElement("div",{},[
        React.createElement("h2",{},props.name),
        React.createElement("h3",{},`Fakultet: ${props.fakultet}`),
        React.createElement("hr")
       ]);
   }
   
   
   const app = () =>{
        return React.createElement(
            "div",
            {},[
            React.createElement("h1", {id : "naslov"}, "studenti"),
            React.createElement(student,{name: "Maja", fakultet: "ETF"}),
            React.createElement(student,{name: "Marko" , fakultet: "PMF"})
        ]
        );
    };
    ReactDOM.render(React.createElement(app),
    document.getElementById("root")
    );