function spreadInContructors() {
    let dt = new Date(2019, 10, 15);
    console.log(dt);

    let dateFields = [2019,11,15];
    dt = new Date(...dateFields);
    console.log(dt);
}

spreadInContructors();