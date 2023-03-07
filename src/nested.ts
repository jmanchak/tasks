import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    let copyQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    copyQuestions = questions.filter(
        (question: Question): boolean => question.published === true
    );
    return copyQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const copyQuestions = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );

    const nonempty = copyQuestions.filter(
        (cquestion: Question): boolean =>
            cquestion.body !== "" ||
            cquestion.expected !== "" ||
            cquestion.options.length > 0
    );
    return nonempty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const copyQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );

    const findQ = copyQuestions.findIndex(
        (question: Question): boolean => question.id === id
    );

    if (questions[findQ]) {
        return questions[findQ];
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const copyQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );

    const toRemove = copyQuestions.filter(
        (question: Question): boolean => question.id !== id
    );

    return toRemove;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const copyQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );

    const justQuestion = copyQuestions.map(
        (question: Question): string => question.name
    );

    return justQuestion;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const copyQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );

    const pointSum = copyQuestions.reduce(
        (pointsTot: number, currQuestion: Question): number =>
            pointsTot + currQuestion.points,
        0
    );
    return pointSum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const copyQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );

    const isPublished = copyQuestions.filter(
        (question: Question): boolean => question.published
    );

    const publishedSum = isPublished.reduce(
        (publishedTot: number, currQuestion: Question): number =>
            publishedTot + currQuestion.points,
        0
    );

    return publishedSum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const copyQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );

    const questionCSV = copyQuestions
        .map(
            (question: Question): string =>
                question.id +
                "," +
                question.name +
                "," +
                question.options.length +
                "," +
                question.points +
                "," +
                question.published
        )
        .join("\n");

    return `id,name,options,points,published\n${questionCSV}`;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const copyQuestions = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );

    return copyQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const copyQuestions = questions.map(
        (question: Question): Question => ({ ...question, published: true })
    );

    return copyQuestions;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const copyQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );

    const areSame = copyQuestions.map((question: Question): boolean =>
        question.type === "multiple_choice_question" ? true : false
    );

    const areAllTrue = areSame.every(
        (isTrue: boolean): boolean => isTrue === true
    );

    const areAllFalse = areSame.every(
        (isFalse: boolean): boolean => isFalse === false
    );

    if (areAllTrue) {
        return true;
    } else if (areAllFalse) {
        return true;
    } else {
        return false;
    }
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 * 
 * id,
        name,
        type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const copyQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const addBlank = [
        ...copyQuestions,
        {
            id: id,
            name: name,
            type: type,
            body: "",
            expected: "",
            options: [],
            points: 1,
            published: false
        }
    ];

    return addBlank;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const copyQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );

    const targetQ = copyQuestions.map(
        (question: Question): Question =>
            question.id === targetId ? { ...question, name: newName } : question
    );

    return targetQ;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const copyQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );

    const targetQ = copyQuestions.map(
        (question: Question): Question =>
            question.id === targetId
                ? { ...question, type: newQuestionType }
                : question
    );

    const ifShortAnswer = targetQ.map(
        (question: Question): Question =>
            question.id === targetId &&
            newQuestionType == "short_answer_question"
                ? { ...question, options: [] }
                : question
    );

    return ifShortAnswer;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const spliceOptions = (question: Question) => {
        const copyOptions = [...question.options];
        copyOptions.splice(targetOptionIndex, 1, newOption);
        return copyOptions;
    };

    if (targetOptionIndex === -1) {
        const targetQNeg = questions.map(
            (question: Question): Question =>
                question.id === targetId && targetOptionIndex === -1
                    ? { ...question, options: [...question.options, newOption] }
                    : { ...question }
        );
        return targetQNeg;
    } else {
        const targetQNotNeg = questions.map(
            (question: Question): Question =>
                question.id === targetId && targetOptionIndex !== -1
                    ? { ...question, options: spliceOptions(question) }
                    : { ...question }
        );
        return targetQNotNeg;
    }
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const copyQuestions = questions.map(
        (question: Question): Question => ({ ...question })
    );

    const targetIndex: number = copyQuestions.findIndex(
        (question: Question): boolean => question.id === targetId
    );

    copyQuestions.splice(1 + targetIndex, 0, {
        ...questions[targetIndex],
        name: "Copy of " + questions[targetIndex].name,
        id: newId
    });

    return copyQuestions;
}
