/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;

  if (days >= 3 && days < 7) {
    return days * rent - 20;
  } else if (days >= 7) {
    return days * rent - 50;
  } else {
    return days * rent;
  }
}

module.exports = calculateRentalCost;
