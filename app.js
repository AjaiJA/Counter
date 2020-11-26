class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={count:0};
        this.add=this.add.bind(this);
        this.subtract=this.subtract.bind(this)
    }

    add()
    {
        this.setState({count:this.state.count+1});
    }

    subtract()
    {
        this.setState({count:this.state.count-1});
    }

    render(){
        return(
            <div className="counter">
                <button onClick={this.subtract} className="subtract">-</button>
                <h1 className="result">{this.state.count}</h1>
                <button onClick={this.add} className="add">+</button>
            </div>
        );
    }
}

ReactDOM.render(<App />,document.getElementById('root'));
