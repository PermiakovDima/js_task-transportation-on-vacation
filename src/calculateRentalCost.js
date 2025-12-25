/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;

  if (days >= 7) {
    return days * costPerDay - 50;
  }

  if (days >= 3 && days < 7) {
    return days * costPerDay - 20;
  }

  return days * costPerDay;
}

module.exports = calculateRentalCost;
