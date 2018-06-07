let JosephusSurvivor = function () {

    let _peopleInCircle = [];
    let _stepCount;

    return {
        withPeopleCircle: function (pepoleInCircle) {

            for (let x = 0; x < pepoleInCircle; x++) {
                _peopleInCircle.push(x + 1)
            }

            return {
                withStepCount: function (stepCount) {
                    _stepCount = stepCount;

                    return {
                        GetSurvivor: function () {

                            let count = 0;
                            let arrayLength = _peopleInCircle.length;

                            for (let x = 0; x < arrayLength; x++) {

                                if (_peopleInCircle.length == 1) {
                                    break;
                                }
                                count++;

                                if (count == _stepCount) {

                                    _peopleInCircle.splice(x, 1);
                                    x--;
                                    count = 0;
                                }

                                if(x ==_peopleInCircle.length-1 && _peopleInCircle.length != 1){
                                    x =-1;
                                }
                            }
                            return _peopleInCircle;
                        }
                    }
                }
            }
        }
    }
}