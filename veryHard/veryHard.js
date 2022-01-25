class Homosapien {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    exercise(activity) {
        console.log(`Today's exercise is ${activity}`)
    }
    fetchJob() {
        console.log(`${this.name} is a ${this.job}`)
    }

}

// const Ron = new Homosapien("Ron", 10000, "Fighter")

// console.log(Ron);

// Ron.exercise('running');

// Ron.fetchJob();

class Programmer extends Homosapien {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = [languages];
        this.isBusy = true;
    }
    completeTask() {
        this.isBusy = false;
        console.log(`${this.name} is done with their task.`)
    }
    acceptNewTask() {
        this.isBusy = true;
    }
    offerNewTask() {
        if (this.isBusy === false) {
            console.log(`${this.name} is ALWAYS READY!`)
        } else {
            console.log(`${this.name} BUSY.`)
        }
    }
    learnLanguage(lang) {
        this.languages.push(lang);
    }
    listLanguages() {
        console.log(this.languages);
    }
}

const Garth = new Programmer("Garth", 17, "Warlock", "HTML")


Garth.learnLanguage('C++');

Garth.learnLanguage('Python');

Garth.listLanguages();

Garth.completeTask();

Garth.offerNewTask();




