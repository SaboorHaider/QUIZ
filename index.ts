#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Defining the Question type to structure each quiz question
type Question = {
    question: string;
    choices: string[];
    correctAnswer: string;
};

// Define the quiz questions and their correct answers
const questions: Question[] = [
    {
        question: 'Which of the following is not a programming language?',
        choices: ['A) Java', 'B) CSS', 'C) Ruby', 'D) PHP'],
        correctAnswer: 'B) CSS'
    },
    {
        question: 'Which company developed TypeScript??',
        choices: ['A) Google', 'B) Facebook', 'C) Microsoft', 'D) Apple'],
        correctAnswer: 'C) Microsoft'
    },
    {
        question: 'What does TypeScript provide that JavaScript does not?',
        choices: ['A) Static typing', 'B) Dynamic typing', 'C) Weak typing', 'D) No typing system'],
        correctAnswer: 'A) Static typing'
    },
    {
        question: 'TypeScript supports which of the following ECMAScript editions?',
        choices: ['A) ES5 and later', 'B) Only ES6', 'C) Only ES7', 'D) Only ES8'],
        correctAnswer: 'A) ES5 and later'
    },
    {
        question: 'Which of the following is not a TypeScript data type?',
        choices: ['A) Number', 'B) Boolean', 'C) Array', 'D) Tuple'],
        correctAnswer: 'D) Tuple'
    },
];

// Asks the quiz questions to the user and evaluates their responses.
async function askQuestions() {
    let correctAnswers = 0;
    let wrongAnswers = 0;

    // Loop through each question in the questions array
    for (const q of questions) {
        // Prompt the user with the current question and choices
        const answer = await inquirer.prompt([   
            {
                type: 'list',
                name: 'response',
                message: q.question,
                choices: q.choices
            }
        ]);

        // Check if the user's answer matches the correct answer
        if (answer.response === q.correctAnswer) {
            console.log(chalk.green.bold(`✔ Correct\n`));
            correctAnswers++; // Increment the score for a correct answer
        } 
        else {
            console.log(`${chalk.bold.redBright("✘ Wrong!")} The correct answer is "${chalk.bold.green(q.correctAnswer)}".\n`);
            wrongAnswers++;
        }
    }

    // Display the user's final score
    console.log("-".repeat(31));
    console.log(chalk.bold.blue(`\tFinal Score:`))
    console.log("-".repeat(31));
    console.log(chalk.bold(`${chalk.green(`Correct Answers: ${correctAnswers}`)}\n${chalk.red(`Wrong Answers: ${wrongAnswers}`)}\n${chalk.yellowBright(`Total Questions: ${questions.length}`)}`));
    console.log("-".repeat(31));
}

// Start the quiz
askQuestions();