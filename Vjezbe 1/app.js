   const student = () =>{
       return React.createElement("div",{},[
        React.createElement("h2",{},"Marko"),
        React.createElement("h2",{},"Maja"),
        React.createElement("h2",{},"Mia")
       ]);
   }
   
   
   const app = () =>{
        return React.createElement(
            "div",
            {},[
            React.createElement("h1", {}, "studenti"),
            React.createElement(student),
            React.createElement(student)
        ]
        );
    };
    ReactDOM.render(React.createElement(app),
    document.getElementById("root")
    );