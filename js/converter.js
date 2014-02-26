var converter = (function () {
    // private stuff goes here


    return {


        convertFromImperialToMetric: function (weight) {
            if (isNaN(weight))
            {
                throw new Error("Not a number");         
            }
            else
            {
                return weight = weight / 2.2;
            }
        },

        convertFromMetricToImperial: function (weight) {

           
        }

    }


})();

