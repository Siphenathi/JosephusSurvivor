describe("JosephusSurvivor", function () {
    describe("GetTheSurvivor", function () {
        describe("Given 1 person in a circle and step by 0", function () {
            it("Should return one person as a survivor", function () {

                //Arrange 
                let sut = new JosephusSurvivor();

                //Act
                
                let actual = sut.withPeopleCircle(1)
                                .withStepCount(0)
                                .GetSurvivor();

                //Assert
                expect(actual).toEqual([1]);
            });
        });

        describe("Given 2 people in a circle and step by 1", function () {
            it("Should return one person as a survivor", function () {

                //Arrange 
                let sut = new JosephusSurvivor();
                //Act
                
                let actual = sut.withPeopleCircle(2)
                                .withStepCount(2)
                                .GetSurvivor();

                //Assert
                expect(actual).toEqual([1]);
            });
        });

        describe("Given 4 people in a circle and step by 2", function () {
            it("Should return one person as a survivor", function () {

                //Arrange 
                let sut = new JosephusSurvivor();
                //Act
                
                let actual = sut.withPeopleCircle(4)
                                .withStepCount(2)
                                .GetSurvivor();

                //Assert
                expect(actual).toEqual([1]);
            });
        });


        describe("Given 5 people in a circle and step by 2", function () {
            it("Should return one person as a survivor", function () {

                //Arrange 
                let sut = new JosephusSurvivor();
                //Act
                
                let actual = sut.withPeopleCircle(5)
                                .withStepCount(2)
                                .GetSurvivor();

                //Assert
                expect(actual).toEqual([3]);
            });
        });


        describe("Given 7 people in a circle and step by 3", function () {
            it("Should return one person as a survivor", function () {

                //Arrange 
                let sut = new JosephusSurvivor();
                //Act
                
                let actual = sut.withPeopleCircle(7)
                                .withStepCount(3)
                                .GetSurvivor();
                //Assert
                expect(actual).toEqual([4]);
            });
        });


        describe("Given 3 people in a circle and step by 3", function () {
            it("Should return one person as a survivor", function () {

                //Arrange 
                let sut = new JosephusSurvivor();
                //Act
                let actual = sut.withPeopleCircle(3)
                                .withStepCount(3)
                                .GetSurvivor();
                //Assert
                expect(actual).toEqual([2]);
            });
        });
    })
})