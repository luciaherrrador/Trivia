const QUESTIONS = 'https://opentdb.com/api.php?amount=10';

const getDataFromServer = () => fetch(QUESTIONS).then(response => response.json());


export { getDataFromServer};