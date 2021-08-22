import React, { Component } from 'react';

const questions = [
    "What's the best thing about Switzerland?",
    "What's the best thing about Switzerland?",
    "What's the best thing about Switzerland?",
    "What's the best thing about Switzerland?",
];
const answers = [
    "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
];

const FAQQuestions = () => (
    <dl class="mt-6 space-y-6 divide-y divide-gray-700">
    {questions.map((item, i) => {
        return (
            <div class="pt-6">
            <dt class="text-lg">
            <button type="button" class="text-left w-full flex justify-between items-start text-gray-400" aria-controls="faq-0" aria-expanded="false">
                <span class="font-medium text-white">
                {item}
                </span>
                <span class="ml-6 h-7 flex items-center">
                <svg class="-rotate-180 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                </span>
            </button>
            </dt>
            <dd class="mt-2 pr-12" id="faq-0">
            <p class="text-base text-gray-200">
                {answers[i]}
            </p>
            </dd>
        </div>
        )
    })}
    </dl>
);

class FAQ extends Component {

  render() {
    return <section class="px-7 py-9 rounded-xl border border-1 border-gray-700 mb-10">
        <h1 class="text-white text-2xl leading-5 font-semibold font-heading mb-5">Frequently Asked Questions</h1>
        <FAQQuestions/>
    </section>;
  }
}

export default FAQ;