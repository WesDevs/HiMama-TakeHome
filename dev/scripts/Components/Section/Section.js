import React from 'react';
// import Menu from '../menus/menu';
import Form from '../Forms/Form';
import AboutSection from './AboutSection';

class Section extends React.Component {

    render() {
        return (
            <section>
                <div className = {this.props.data.sectionClass}>
                    <div className = "wrapper">
                        {
                            this.props.data.h1 ? <h1><span>{this.props.data.span}</span>{this.props.data.h1}</h1> : ''
                        }
                        {
                            this.props.data.h3 ? <h3>{this.props.data.h3}</h3> : ''
                        }
                        {
                            this.props.data.p ? <p>{this.props.data.p}</p> : ''
                        }
                        {
                            this.props.formData ? <Form formData = {this.props.formData}/> : ''
                        }
                    </div>
                </div>
                < AboutSection />
            </section>
        )
    }
}

export default Section;