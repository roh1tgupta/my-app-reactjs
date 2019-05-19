import React from 'react';
class FocusInputBox extends React.Component {
  constructor(props){
    super(props);
    this.rfrnc = null
    this.submit = this.submit.bind(this);
    this.state = {
      text: ''
    }
  }
  submit() {
    if (this.rfrnc) {
      this.setState({text: this.rfrnc.value});
      this.rfrnc.focus();
    }
  }
  render() {
    return (<div>
        <input ref={(ref) => {
          console.log(ref);
          this.rfrnc = ref
        }} />
        <input type="button" value="submit" onClick={this.submit}/>
        {this.state.text && <div>you entered {this.state.text} </div>}      
    </div>);
  }
}

class AutoFocusInputBox extends React.Component {
  constructor(props) {
    super(props);
    this.refToClassComponent = null;
  }
  componentDidMount() {
    if (this.refToClassComponent) {
      this.refToClassComponent.submit();
    }
  }
  render() {
    return (<div>
      <FocusInputBox ref={(ref) => {
        console.log(ref);
        this.refToClassComponent = ref;
      }}
    />
    </div>);
  }
}


export default AutoFocusInputBox;