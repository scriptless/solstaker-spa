import React, { Component } from 'react';
import ScrollSection from '../elements/ScrollSection';

const questionsArray = [
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus.",
        open: true
    },
    {
        question: "What's the best thing about Germany?",
        answer: "I don't know, but the flag is shit.",
        open: false
    }
] 

const FAQQuestions = props => (
    <dl className="mt-6 space-y-6 divide-y divide-gray-700">
    {props.questions.map((item, i) => {
        return (<div key={i} className="pt-6">
            <dt className="text-lg">
                <button onClick={() => props.handleOpen(i)} type="button" className="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                    <span className="font-medium text-white">
                    {item.question}
                    </span>
                    <span className="ml-6 h-7 flex items-center">
                        <svg className={item.open ? "-rotate-180 h-6 w-6 transform": "h-6 w-6 transform"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </span>
                </button>
            </dt>
            {item.open && (
            <dd className="mt-2 pr-12" id="faq-0">
                <p className="text-base text-gray-200">
                    {item.answer}
                </p>
            </dd>)}
        </div>
        );
    })}
    </dl>
);

class FAQ extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [...questionsArray]            
        }
    }

    handleOpenQuestion = (id) => {
        const questions = [...this.state.questions]
        questions[id].open = !questions[id].open
        this.setState({ questions })
    }

    render() {
        const { questions } = this.state;
        return <ScrollSection name="faq" className="px-7 py-9 rounded-xl border border-1 border-gray-700">
            <h1 className="text-white text-2xl leading-5 font-semibold font-heading mb-5">Frequently Asked Questions</h1>
            <FAQQuestions questions={questions} handleOpen={this.handleOpenQuestion}/>
        </ScrollSection>;
    }
}

export default FAQ;