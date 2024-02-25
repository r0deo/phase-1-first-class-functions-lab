// returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // returnLastTwoDrivers function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // selectingDrivers array
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // createFareMultiplier function
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // selectDifferentDrivers function
  const selectDifferentDrivers = function(drivers, selectorFunction) {
    return selectorFunction(drivers);
  };
  
  // Example usage
  const drivers = ['Driver1', 'Driver2', 'Driver3', 'Driver4'];
  
  console.log(returnFirstTwoDrivers(drivers));  // Output: ['Driver1', 'Driver2']
  console.log(returnLastTwoDrivers(drivers));   // Output: ['Driver3', 'Driver4']
  console.log(createFareMultiplier(4)(10));      // Output: 40
  console.log(fareDoubler(10));                  // Output: 20
  console.log(fareTripler(10));                  // Output: 30
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));  // Output: ['Driver1', 'Driver2']
  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));   // Output: ['Driver3', 'Driver4']
  