/* 
 * Source: https://www.calculatorsoup.com/calculators/health/bmi-calculator.php
 * ======================= Metrics Units Formula =======================
 * Matilda weighs 64 kg and is 1.9 meters tall. What is her BMI?
 * BMI = w ÷ h2
 * BMI = 64 ÷ 1.92
 * BMI = 64 ÷ 3.61
 * BMI = 17.7
 */

module.exports.metricUnits = (height,weight)=> {
    height *= height // get thee square root of height
    return  weight / height 
}


/* 
 * Source: https://www.calculatorsoup.com/calculators/health/bmi-calculator.php
 * ======================= US Units Formula =======================
 * Stanley weighs 184 lb and is 5 feet, 10 inches tall. What is his BMI?
 * Find total inches by multiplying 5 * 12 and add 10. Divide weight by total inches squared and multiply the result by 703.
 * 5 feet, 10 inches = 70 inches
 * BMI = (w ÷ h2) * 703
 * BMI = (184 ÷ 702) * 703
 * BMI = (184 ÷ 4900) * 703
 * BMI = 0.3755 * 703
 * BMI = 26.4
*/
module.exports.usUnits = (feet, inches, pounds)=> {
    let height = feet * 12 + inches;
    height *= height // get thee square root of height
    return (pounds / height) * 703;
}