var person = (function () {
    const pii = {
        name: "Guy",
        ssn: '999-99-9999'
    };
    return {
        getName: function () {
            console.log(pii.name)
        }
    }
})();

person.getName();