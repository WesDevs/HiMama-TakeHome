import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Components/Nav/navBar';
import Section from './Components/Section/Section';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import ThankYou from './Components/thankyou';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      TopNav: {
        data: [
          {
            value: 'Home',
            link: "https://www.himama.com/"
          }, 
          {
            value: 'Features',
            link: "https://www.himama.com/features"
          }, 
          {
            value: 'Blog',
            link: "https://www.himama.com/blog"
          }],
        style: 'top-nav'
      },
      referralSection: {
        h1: 'Create your child’s profile and we’ll send it over to your daycare, along with an invitation for them to try HiMama forfree!',
        sectionClass: 'referral-section',
      },
      formData: {
        formClass: 'referral-form',
        data1: [
          {
            label: 'Your Name',
            for: 'parentName',
            inputType: 'text',
          },
          {
            label: 'Your Email',
            for: 'email',
            inputType: 'email',
          },
          {
            label: "Your Child's Name",
            for: 'childName',
            inputType: 'text',
          },
        ],
        upload: {
          label: "Add your Child's Photo! (Optional)",
          for: 'avatar',
          inputType: 'file',
          accept: 'image/png, image/jpeg'
        },
        data2: 
        [
          {
            label: 'Name of Daycare',
            for: 'daycareName',
            inputType: 'text'
          }, 
          {
            label: 'Daycare Email',
            for: 'email',
            inputType: 'email'
          }, 
          {
            label: "Contact at Daycare",
            for: 'daycareContact',
            inputType: 'text',
            radioItems: {
                label1: 'Teacher',
                label2: 'Director',
                type: 'radio',
                for1: 'teacher',
                for2: 'director',
                name: 'occupation'
                
              }
          }, 
          {
            label: "Contact Number",
            for: 'daycareContactNumber',
            inputType: 'tel',
            radioItems: {
                label1: 'Cell/Mobile',
                label2: 'Daycare',
                type: 'radio',
                for1: 'cell',
                for2: 'daycare',
                name: 'contact'
              }
          },
        ]
      },
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log(e);
    const formSubmit = document.getElementById("form");
    formSubmit.submit();
  }

  render() {
    return (

        <main>
            <NavBar data={this.state.TopNav} />
            <Section data={this.state.referralSection} formData = {this.state.formData}/>
        </main>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
