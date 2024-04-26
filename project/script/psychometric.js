function evaluateResults() {
    const form = document.getElementById('mentalStateForm');
    let score = 0;
    const totalQuestions = 5; // Update this if you add more questions

    for (let i = 1; i <= totalQuestions; i++) {
        const radios = form['question' + i];
        for (let radio of radios) {
            if (radio.checked) {
                score += parseInt(radio.value);
                break;
            }
        }
    }

    // const result = document.getElementById('result');
    // if (score < 5) {
    //     result.textContent = 'Your mental state seems stable.';
    // } else if (score < 10) {
    //     result.textContent = 'Mild symptoms detected. It may be good to talk to someone.';
    // } else {
    //     result.textContent = 'Significant symptoms detected. Consider seeking professional help.';
    // }
    // localStorage.setItem('mentalStateScore', score);

    // // Navigate to the next page
    // window.location.href = 'results.html';
    localStorage.setItem('mentalStateScore', score);

    // Navigate to the next page
    window.location.href = '/html/results.html';
}
