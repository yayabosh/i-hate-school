'use strict';
// TODO: Add fact of the day about grades - like Einstein
// Add Calvin and Hobbes comic about grades

const titles = ['𝖎 𝖍𝖆𝖙𝖊 𝖘𝖈𝖍𝖔𝖔𝖑', 'i hate school', 'ⓘ ⓗⓐⓣⓔ ⓢⓒⓗⓞⓞⓛ', 'ｉ ｈａｔｅ ｓｃｈｏｏｌ',
      '𝕚 𝕙𝕒𝕥𝕖 𝕤𝕔𝕙𝕠𝕠𝕝', '-moz-transform: scale(-1, 1); -webkit-transform: scale(-1, 1); -o-transform: scale(-1, 1); -ms-transform: scale(-1, 1);  transform: scale(-1, 1);',
      '-moz-transform: scale(1, -1); -webkit-transform: scale(1, -1); -o-transform: scale(1, -1); -ms-transform: scale(1, -1); transform: scale(1, -1);',
      'text-decoration: line-through;', '𝐢 𝐡𝐚𝐭𝐞 𝐬𝐜𝐡𝐨𝐨𝐥', 'ï hå†ê §¢hððl', 'ł Ⱨ₳₮Ɇ ₴₵ⱧØØⱠ', '丨 卄卂ㄒ乇 丂匚卄ㄖㄖㄥ', 'ﾉ んﾑｲ乇 丂ᄃんののﾚ',
      '≋i≋ ≋h≋a≋t≋e≋ ≋s≋c≋h≋o≋o≋l≋', '(っ◔◡◔)っ ♥ i hate school ♥', 'ｉ<br> ｈａｔｅ<br> ｓｃｈｏｏｌ　ポサが',
      'i̷ ̷h̷a̷t̷e̷ ̷s̷c̷h̷o̷o̷l̷', 'ıllıllı ｉ 𝕙𝔞ⓣᵉ 丂ᑕĤ𝐨𝐨ℓ ıllıllı', '¯_( ͡° ͜ʖ ͡°)_/¯ 𝙞 𝙝𝙖𝙩𝙚 𝙨𝙘𝙝𝙤𝙤𝙡 ¯_( ͡° ͜ʖ ͡°)_/¯',
      `¯\\_( ͡° ͜ʖ ͡°)_/¯ 𝙞 𝙝𝙖𝙩𝙚 𝙨𝙘𝙝𝙤𝙤𝙡 ¯\\_( ͡° ͜ʖ ͡°)_/¯`, '▁ ▂ ▄ ▅ ▆ ▇ █ <br>i hate school<br> █ ▇ ▆ ▅ ▄ ▂ ▁',
      'ι нαтє ѕ¢нσσℓ', 'ї натё $cнѳѳг', '🅘 🅗🅐🅣🅔 🅢🅒🅗🅞🅞🅛', '♗ ♄ꍏ☂€ ⓢ☾♄⊙⊙↳', 'Ĩ ĤĂŤĔ ŚČĤŐŐĹ',
      'Ꭵ ᏂᏗᏖᏋ ᏕፈᏂᎧᎧᏝ', 'Ɨ ĦΔŦ€ ŞĆĦØØŁ', 'Ꭵ ᕼᗩ丅ᗴ ᔕᑕᕼᗝᗝᒪ', 'เ ɦαƭε ร૮ɦσσℓ', 'เ ђคtє รςђ๏๏l', 'ι нaтe ѕcнool',
      'ȋ ȟåț£ §çȟ¤¤Ƚ', 'ɨ hąţ€ $ȼh๏๏ℓ', 'ἶ hმནპ ჰეhõõl', 'ᓿ ᕼᗅᖶᙍ Sᑤᕼᓎᓎᒪ', 'í hαtє ѕchσσl', 'ί ħάţέ şςħόόĻ',
      'ꂑ ꑛꋫ꓅ꍟ ꌚꏸꑛꆂꆂ꒒', 'î ℍД✞Ǝ Ƨℂℍøøℓ', 'I HДΓΞ SCHФФL', 'ɨ ɦǟᏆɛ ֆƈɦօօʟ', 'í հɑԵҽ ՏϲհօօӀ', 'ꀤ ꃅꍏ꓄ꍟ ꌗꉓꃅꂦꂦ꒒',
      '꒐ ꁝꋬ꓄ꏂ ꇙꉔꁝꄲꄲ꒒', 'ɪ нΛŤƐ らㄈнØØŁ', 'Ɩ ӇƛƬЄ ƧƇӇƠƠԼ', 'ꂑ ꍩꁲꋖꈼ ꌚꀯꍩꂦꂦ꒒', '꒐ ꃬꋬ꓄ꏂ ꑄꏳꃬꉻꉻ꒒',
      'ɿ ɧԹԵȝ ՏՇɧԾԾʅ', 'ï hα†ε šςh⊕⊕ﾚ', 'i hคtē Ş¢h໐໐l', 'ı ɧąɬɛ ʂƈɧơơƖ', 'ᓰ ᕼᗩᖶᘿ Sᑢᕼᓍᓍᒪ', 'Ꭵ ♅ᕱϮꂅ Ꮥ꒝♅ԾԾլ',
      'ɿ Һค੮૯ ς८Һ૦૦Ն', 'ጎ ዘልፕቿ ነርዘዐዐረ', '🎐  ♓🅰🌴🎗  💲🌜♓⚽⚽👢', '! h473 5(h001', 'Ꭵ ᏂᏗᏖᏋ ᏕፈᏂᎧᎧᏝ']

const titlesCSS = ['-moz-transform: scale(-1, 1); -webkit-transform: scale(-1, 1); -o-transform: scale(-1, 1); -ms-transform: scale(-1, 1);  transform: scale(-1, 1);',
'-moz-transform: scale(1, -1); -webkit-transform: scale(1, -1); -o-transform: scale(1, -1); -ms-transform: scale(1, -1); transform: scale(1, -1);', 'text-decoration: line-through;']

const title = document.getElementById('index-title')
const changeTitleFont = () => {
  const randomIndex = Math.floor(Math.random() * titles.length)
  // Upside-down text, backwards text, strikethrough
  if (randomIndex === 5 || randomIndex === 6 || randomIndex === 7) {
    title.style.cssText = titlesCSS[Math.floor(Math.random() * 3)]
    title.textContent   = 'i hate school'
  } else {
    title.style.cssText = ''
    title.innerHTML = titles[randomIndex]
  }
}

// Load random title font on page load
window.onload = () => changeTitleFont()

// Change title font on click
title.addEventListener('click', changeTitleFont);

const clearDocument = () => {
  const paragraphs = document.querySelectorAll('p.answer, p.validate')
  for (const p of paragraphs) {
    p.textContent = ''
  }
}

const buttons = document.querySelectorAll('button')
for (const button of buttons) {
  button.addEventListener('click', clearDocument)
}

const enableEditButton = button => button.removeAttribute('disabled')

const deleteRow = (table, index, validationID) => {
  if (index === 1) {
    document.getElementById(validationID).textContent = `Bro fr you can't delete the whole table!`
    return false
  }
  table.deleteRow(index)
  return true
}

/**
 * Evaluates if a string value is numeric. A value is numeric if it is an integer or decimal.
 *
 * @param {string} value the string to be validated
 *
 * @return true if the value is numeric
 */
const isNumeric = value => !isNaN(value) && isFinite(value) && value.trim() !== ''


/**
 * Verifies that the inputs of the pre- and post-final functions are numeric and that the weight
 * of the assignment is positive. The only exception is when calculating the post-final
 * overall grade, when the assignment worth can be zero percent.
 *
 * @param {number} currentGrade the student's current grade in the class in percentage
 * @param {number} assignmentWorth the final or project's weight in percentage
 * @param {number} gradeWanted the student's desired grade in percentage
 * @param {string} id the ID of the HTML element to edit if displaying an error message
 *
 * @return true if the inputs are numeric and the assignment weight is positive or zero if
 *  calculating post-final overall grade
 */
const verifyFinalGrade = (currentGrade, assignmentWorth, gradeWanted, id) => {
  if (!isNumeric(currentGrade) || !isNumeric(assignmentWorth) || !isNumeric(gradeWanted)) {
    document.getElementById(id).textContent = '😐 Bro fr you gotta fill in numbers'
    return false
  } else if (assignmentWorth < 0
         || id === 'grade-needed-pre-final' && parseFloat(assignmentWorth) === 0) {
    document.getElementById(id).innerHTML =
      `The assignment or test can't be worth nothing!
      If it is, you're screwed! (Or you're saved. That depends on your current grade...)
      <div>
        <iframe src="https://giphy.com/embed/3o7buirYcmV5nSwIRW" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <p>
        <a href="https://giphy.com/gifs/emoji-idk-thinking-3o7buirYcmV5nSwIRW"></a>
        </p>
      </div>`
    return false
  }
  return true
}

/**
 * Helper calculator for the pre-final grade needed function.
 *
 * @param {number} currentGrade the student's current grade in the class in percentage
 * @param {number} assignmentWorth the final or project's weight in decimal form
 * @param {number} gradeWanted the student's desired grade in percentage
 *
 * @return the grade needed on the final, project, or assignment
 */
const gradeNeededPreFinal = (currentGrade, assignmentWorth, gradeWanted) =>
  (gradeWanted - currentGrade * (1 - assignmentWorth)) / assignmentWorth

/**
 * Calculates the grade needed on a final, project, or any assignment worth a portion of the
 * student's overall grade. Outputs a message with the calculated grade needed on the assignment
 * to earn the desired grade in the class.
 *
 * Preconditions: The assignment weight and desired grade must be greater than zero percent.
 */
document.getElementById('calculate-grade-needed-pre-final').addEventListener('click', event => {
  const currentGrade    = document.getElementById('current-grade-pre-final').value
  const assignmentWorth = document.getElementById('assignment-worth-pre-final').value
  const gradeWanted     = document.getElementById('grade-wanted-pre-final').value

  if (verifyFinalGrade(currentGrade, assignmentWorth, gradeWanted, 'grade-needed-pre-final')) {
    const gradeNeeded = gradeNeededPreFinal(currentGrade, assignmentWorth / 100, gradeWanted)
    document.getElementById('grade-needed-pre-final').textContent =
      `You will need a ${parseFloat(gradeNeeded.toFixed(2))}% on your upcoming test or
      assignment to earn a ${gradeWanted}% in your class.`
  }
  event.preventDefault()
})


const overallGradePostFinal = (currentGrade, assignmentWorth, gradeEarned) =>
  (1 - assignmentWorth) * currentGrade + assignmentWorth * gradeEarned

document.getElementById('calculate-overall-grade-post-final').addEventListener('click', event => {
  const currentGrade    = document.getElementById('current-grade-post-final').value
  const assignmentWorth = document.getElementById('assignment-worth-post-final').value
  const gradeEarned     = document.getElementById('grade-earned-post-final').value

  if (verifyFinalGrade(currentGrade, assignmentWorth, gradeEarned, 'overall-grade-post-final')) {
    const overallGrade = overallGradePostFinal(currentGrade, assignmentWorth / 100, gradeEarned)
    document.getElementById('overall-grade-post-final').textContent =
      `If you earned a ${gradeEarned}% on your assignment or test, your overall grade will be
      a ${parseFloat(overallGrade.toFixed(2))}%. GG bro fr!`
  }
  event.preventDefault()
})


const verifyNewCategoryInputs = () => {
  const currentGrade   = document.getElementById('current-grade-multiple-assignments-new-category').value
  const categoryWeight = document.getElementById('category-weight-multiple-assignments-new-category').value

  if (!isNumeric(currentGrade) || !isNumeric(categoryWeight)) {
    document.getElementById('validate-new-category-inputs').textContent =
      'Bro fr u gotta fill in numbers'
    return false
  } else if (categoryWeight <= 0) {
    document.getElementById('validate-new-category-inputs').textContent =
      'Bro how can the weight be negative or zero fr!'
    return false
  }
  return true
}

const disableNewCategoryInputs = () => {
  const form = document.getElementById('multiple-assignments-new-category-inputs')

  const inputs = form.getElementsByTagName('input')
  for (const input of inputs) {
    input.setAttribute('disabled', '')
  }

  document.getElementById('complete-new-category-inputs').setAttribute('disabled', '')
}

const enableNewCategoryTable = () => {
  document.getElementById('multiple-assignments-new-category-table').classList.add('enabled')

  const table = document.getElementById('multiple-assignments-new-category-table-container')

  const inputs = table.getElementsByTagName('input')
  for (const input of inputs) {
    input.removeAttribute('disabled')
  }

  const buttons = table.getElementsByTagName('button')
  for (const button of buttons) {
    button.removeAttribute('disabled')
  }
}

document.getElementById('complete-new-category-inputs').addEventListener('click', event => {
  if (verifyNewCategoryInputs()) {
    disableNewCategoryInputs()
    const editButton = document.getElementById('multiple-assignments-new-category-edit-button')
    enableEditButton(editButton)
    enableNewCategoryTable()
  }
  event.preventDefault()
})

const enableNewCategoryInputs = () => {
  const form = document.getElementById('multiple-assignments-new-category-inputs')

  const inputs = form.getElementsByTagName('input')
  for (const input of inputs) {
    input.removeAttribute('disabled')
  }

  document.getElementById('complete-new-category-inputs').removeAttribute('disabled')
}

const disableMultipleAssignmentNewCategoryInputsPre = () => {
  const form = document.getElementById('multiple-assignments-new-category-pre')

  const inputs = form.getElementsByTagName('input')
  for (const input of inputs) {
    input.setAttribute('disabled', '')
  }

  document
    .getElementById('calculate-grade-multiple-assignments-new-category-pre')
    .setAttribute('disabled', '')
}

document.getElementById('multiple-assignments-new-category-edit-button').addEventListener('click', event => {
  disableAssignmentTableNewCategory()
  disableMultipleAssignmentNewCategoryInputsPre()
  document
      .getElementById('calculate-grade-multiple-assignments-new-category-post')
      .setAttribute('disabled', '')
  enableNewCategoryInputs()
  event.preventDefault()
})

const verifyAssignmentTableNewCategory = () => {
  const table = document.getElementById('multiple-assignments-new-category-table')
  for (let row = 1; row < table.rows.length; row++) {
    const earnedPoints = table.rows[row].cells[2].children[0].value
    const totalPoints  = table.rows[row].cells[3].children[0].value

    if (!isNumeric(earnedPoints) || !isNumeric(totalPoints)) {
      document.getElementById('validate-assignments-table-new-category').textContent =
        '😐 Bro fr you gotta fill out numbers'
      return false
    } else if (totalPoints < 0) {
      document.getElementById('validate-assignments-table-new-category').textContent =
        '😐 Bro fr try and make a negative value. Do it! I dare you!'
      return false
    }
  }
  return true
}

let assignmentNumNewCategory = 1
const addAssignmentNewCategory = table => {
  assignmentNumNewCategory++

  const row = table.insertRow(-1)

  const assignment = row.insertCell(-1)
  assignment.textContent = assignmentNumNewCategory

  const name = row.insertCell(-1)
  name.innerHTML = `<input id="assignment-${assignmentNumNewCategory}-name-new-category">`

  const earnedPoints = row.insertCell(-1)
  earnedPoints.innerHTML = `<input id="assignment-${assignmentNumNewCategory}-earned-points-new-category"> points`

  const totalPoints = row.insertCell(-1)
  totalPoints.innerHTML = `<input id="assignment-${assignmentNumNewCategory}-total-points-new-category"> points`
}

document.getElementById('add-assignment-new-category').addEventListener('click', () => {
  if (verifyAssignmentTableNewCategory()) {
    const table = document.getElementById('multiple-assignments-new-category-table')
    addAssignmentNewCategory(table)
  }
})

document.getElementById('delete-row-new-category').addEventListener('click', () => {
  const table        = document.getElementById('multiple-assignments-new-category-table')
  const index        = assignmentNumNewCategory
  const validationID = 'validate-assignments-table-new-category'
  if (deleteRow(table, index, validationID)) {
    assignmentNumNewCategory--
  }
})

const disableAssignmentTableNewCategory = () => {
  document.getElementById('multiple-assignments-new-category-table').classList.remove('enabled')

  const table = document.getElementById('multiple-assignments-new-category-table-container')

  const inputs = table.getElementsByTagName('input')
  for (const input of inputs) {
    input.setAttribute('disabled', '')
  }

  const buttons = table.getElementsByTagName('button')
  for (const button of buttons) {
    if (button.id !== 'new-category-table-edit-button') {
      button.setAttribute('disabled', '')
    }
  }
}

const enableNewCategoryInputsPre = () => {
  const form = document.getElementById('multiple-assignments-new-category-pre')

  const inputs = form.getElementsByTagName('input')
  for (const input of inputs) {
    input.removeAttribute('disabled')
  }

  document
    .getElementById('calculate-grade-multiple-assignments-new-category-pre')
    .removeAttribute('disabled')
}

document.getElementById('complete-assignment-addition-new-category').addEventListener('click', () => {
  if (verifyAssignmentTableNewCategory()) {
    disableAssignmentTableNewCategory()
    document
      .getElementById('calculate-grade-multiple-assignments-new-category-post')
      .removeAttribute('disabled')
    enableNewCategoryInputsPre()
    const editButton = document.getElementById('new-category-table-edit-button')
    enableEditButton(editButton)
  }
})

const disableNewCategoryInputsPre = () => {
  const form = document.getElementById('multiple-assignments-new-category-pre')

  const inputs = form.getElementsByTagName('input')
  for (const input of inputs) {
    input.setAttribute('disabled', '')
  }

  document
    .getElementById('calculate-grade-multiple-assignments-new-category-pre')
    .setAttribute('disabled', '')
}

document.getElementById('new-category-table-edit-button').addEventListener('click', () => {
  disableNewCategoryInputs()
  disableNewCategoryInputsPre()
  document
      .getElementById('calculate-grade-multiple-assignments-new-category-post')
      .setAttribute('disabled', '')
  enableNewCategoryTable()
})

document.getElementById('new-category-table-reset-button').addEventListener('click', () => {
  document.getElementById('multiple-assignments-new-category-table').innerHTML =
    `<tr>
    <th>Assignment</th>
    <th>Name</th>
    <th>Points Earned</th>
    <th>Total Points</th>
  </tr>
  <tr>
    <td>1</td>
    <td>
      <input id="assignment-1-name-new-category">
    </td>
    <td>
      <input id="assignment-1-earned-points-new-category">
      <label for="assignment-1-earned-points-new-category">points</label>
    </td>
    <td>
      <input id="assignment-1-total-points-new-category">
      <label for="assignment-1-total-points-new-category">points</label>
    </td>
  </tr>`
})

const compositeNewCategoryGradeMultipleAssignments = () => {
  let earnedPoints = 0
  let totalPoints  = 0

  const table = document.getElementById('multiple-assignments-new-category-table')
  for (let row = 1; row < table.rows.length; row++) {
    const assignmentEarnedPoints = parseFloat(table.rows[row].cells[2].children[0].value)
    earnedPoints += assignmentEarnedPoints

    const assignmentTotalPoints = parseFloat(table.rows[row].cells[3].children[0].value)
    totalPoints += assignmentTotalPoints
  }
  return earnedPoints / totalPoints
}

const overallGradeMultipleAssignmentsNewCategory = () => {
  const currentGrade   = parseFloat(document.getElementById('current-grade-multiple-assignments-new-category').value) / 100
  const categoryWeight = parseFloat(document.getElementById('category-weight-multiple-assignments-new-category').value)

  const overallGrade = currentGrade
             * (100 - categoryWeight)
             + compositeNewCategoryGradeMultipleAssignments()
             * categoryWeight

  document.getElementById('overall-grade-multiple-assignments-new-category-post').textContent =
    `Your overall grade will be ${parseFloat(overallGrade.toFixed(2))}% fr!`
}

document.getElementById('calculate-grade-multiple-assignments-new-category-post').addEventListener('click', () => {
  overallGradeMultipleAssignmentsNewCategory()
  event.preventDefault()
})


const verifyMultipleAssignmentsNewCategoryInputsPre = () => {
  const assignmentPoints = document.getElementById('assignment-total-points-multiple-assignments-new-category-pre').value
  const gradeWanted      = document.getElementById('grade-wanted-multiple-assignments-new-category-pre').value

  if (!isNumeric(assignmentPoints) || !isNumeric(gradeWanted)) {
    document.getElementById('grade-needed-multiple-assignments-new-category-pre').textContent =
      'Bro fr u gotta fill out numbers fr!'
    return false
  }
  return true
}

const gradeNeededMultipleAssignmentsNewCategory = () => {
  const currentGrade     = parseFloat(document.getElementById('current-grade-multiple-assignments-new-category').value) / 100
  const categoryWeight   = parseFloat(document.getElementById('category-weight-multiple-assignments-new-category').value)
  const assignmentPoints = parseFloat(document.getElementById('assignment-total-points-multiple-assignments-new-category-pre').value)
  const gradeWanted      = parseFloat(document.getElementById('grade-wanted-multiple-assignments-new-category-pre').value)

  let earnedPoints = 0
  let totalPoints  = 0

  const table = document.getElementById('multiple-assignments-new-category-table')
  for (let row = 1; row < table.rows.length; row++) {
    const assignmentEarnedPoints = parseFloat(table.rows[row].cells[2].children[0].value)
    earnedPoints += assignmentEarnedPoints

    const assignmentTotalPoints = parseFloat(table.rows[row].cells[3].children[0].value)
    totalPoints += assignmentTotalPoints
  }
  totalPoints += assignmentPoints

  const pointsNeeded = totalPoints
             * (gradeWanted
              - currentGrade
              * (100 - categoryWeight))
             / categoryWeight
             - earnedPoints

  const gradeNeeded = pointsNeeded
            / assignmentPoints
            * 100

  document.getElementById('grade-needed-multiple-assignments-new-category-pre').textContent =
    `You'll need a ${parseFloat(gradeNeeded.toFixed(2))}%
    (${parseFloat(pointsNeeded.toFixed(2))} out of ${assignmentPoints} points) on your assignment
    to earn a ${gradeWanted}% in your class. GG bro!`
}

document.getElementById('calculate-grade-multiple-assignments-new-category-pre').addEventListener('click', () => {
  if (verifyMultipleAssignmentsNewCategoryInputsPre()) {
    gradeNeededMultipleAssignmentsNewCategory()
  }
  event.preventDefault()
})


const finalWorthPoints = (classTotalPoints, finalPoints) =>
  finalPoints / (parseFloat(classTotalPoints) + parseFloat(finalPoints)) * 100

document.getElementById('calculate-final-worth-points').addEventListener('click', event => {
  const finalPoints      = document.getElementById('final-points-final-worth').value
  const classTotalPoints = document.getElementById('total-points-final-worth').value

  if (verifyFinalGrade(classTotalPoints, '1', finalPoints, 'final-worth-points-output')) {
    if (classTotalPoints > 0 && finalPoints >= 0) {
      const finalWorth = finalWorthPoints(classTotalPoints, finalPoints)
      document.getElementById('final-worth-points-output').textContent =
        `Your final is worth ${parseFloat(finalWorth.toFixed(2))}% of your overall grade.`
    } else if (finalPoints < 0) {
      document.getElementById('final-worth-points-output').innerHTML =
        `You can't have a final worth negative points going in! Unless your teacher is evil...in which case 😐
        <div>
          <iframe src="https://giphy.com/embed/3o7buirYcmV5nSwIRW" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          <p>
          <a href="https://giphy.com/gifs/emoji-idk-thinking-3o7buirYcmV5nSwIRW"></a>
          </p>
        </div>`
    } else if (finalPoints === 0) {
      document.getElementById('final-worth-points-output').textContent =
        'Your final is worth 0% of your overall grade.'
    } else {
      document.getElementById('final-worth-points-output').innerHTML =
        `Your final is worth ∞% of your overall grade. Interesting...
        <div>
          <iframe src="https://giphy.com/embed/3o7buirYcmV5nSwIRW" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          <p>
          <a href="https://giphy.com/gifs/emoji-idk-thinking-3o7buirYcmV5nSwIRW"></a>
          </p>
        </div>`
    }
  }
  event.preventDefault()
})


const sumOfWeights = () => {
  const table = document.getElementById('weighted-categories-table')
  let sum = 0
  for (let i = 1; i < table.rows.length; i++) {
    const weight = parseFloat(table.rows[i].cells[2].children[0].value)
    sum += weight
  }
  return sum
}

const verifyWeightedCategory = () => {
  const table = document.getElementById('weighted-categories-table')
  for (let row = 1; row < table.rows.length; row++) {
    const weight       = table.rows[row].cells[2].children[0].value
    const pointsEarned = table.rows[row].cells[3].children[0].value
    const totalPoints  = table.rows[row].cells[4].children[0].value

    if (!isNumeric(weight) || !isNumeric(pointsEarned) || !isNumeric(totalPoints)) {
      document.getElementById('validate-table').textContent =
        '😐 Bro fr you gotta fill out numbers'
      return false
    } else if (weight <= 0 || totalPoints <= 0) {
      document.getElementById('validate-table').textContent =
        '😐 Bro fr try and make a zero or negative value. Do it! I dare you!'
      return false
    }
  }
  if (sumOfWeights() > 100) {
    document.getElementById('validate-table').textContent =
      `Bro fr the weights cannot add up to more than 100%.`
    return false
  }
  return true
}

/**
 * Adds a weighted category to a table comprising all weighted categories in a class.
 */
let categoryNum = 1
const addCategory = table => {
  categoryNum++

  const row = table.insertRow(-1)

  const category = row.insertCell(-1)
  category.textContent = categoryNum

  const name = row.insertCell(-1)
  name.innerHTML = `<input id="category-${categoryNum}-name">`

  const weight = row.insertCell(-1)
  weight.innerHTML = `<input id="category-${categoryNum}-weight">%`

  const earnedPoints = row.insertCell(-1)
  earnedPoints.innerHTML = `<input id="category-${categoryNum}-earned-points"> points`

  const totalPoints = row.insertCell(-1)
  totalPoints.innerHTML = `<input id="category-${categoryNum}-total-points"> points`
}

document.getElementById('add-weighted-category').addEventListener('click', () => {
  if (verifyWeightedCategory() && sumOfWeights() < 100) {
    const table = document.getElementById('weighted-categories-table')
    addCategory(table)
  } else if (verifyWeightedCategory() && sumOfWeights() === 100) {
    document.getElementById('validate-table').textContent =
      `The weights total to 100%. You cannot add any more categories.
      Unless u want to lose some limbs fr!`
  }
})

document.getElementById('delete-row-weighted-category').addEventListener('click', () => {
  const table = document.getElementById('weighted-categories-table')
  const index = categoryNum
  const validationID = 'validate-table'
  if (deleteRow(table, index, validationID)) {
    categoryNum--
  }
})

const disableWeightedCategoriesTable = () => {
  document.getElementById('weighted-categories-table').classList.remove('enabled')

  const table = document.getElementById('weighted-categories-container')

  const inputs = table.getElementsByTagName('input')
  for (const input of inputs) {
    input.setAttribute('disabled', '')
  }

  const buttons = table.getElementsByTagName('button')
  for (const button of buttons) {
    if (button.id !== 'edit-button-weighted-category') {
      button.setAttribute('disabled', '')
    }
  }
}

const enableOneAssignmentInputs = id => {
  const form = document.getElementById(`${id}-weighted-grade`)

  const inputs = form.getElementsByTagName('input')
  for (const input of inputs) {
    input.removeAttribute('disabled')
  }

  document.getElementById(`weighted-grade-button-${id}`).removeAttribute('disabled')
}


const enableMultipleAssignmentsTable = () => {
  document.getElementById('multiple-assignments-table').classList.add('enabled')

  const table = document.getElementById('multiple-assignments-container')

  const inputs = table.getElementsByTagName('input')
  for (const input of inputs) {
    input.removeAttribute('disabled')
  }

  const buttons = table.getElementsByTagName('button')
  for (const button of buttons) {
    button.removeAttribute('disabled')
  }
}

document.getElementById('complete-category-addition').addEventListener('click', () => {
  if (verifyWeightedCategory() && sumOfWeights() === 100) {
    disableWeightedCategoriesTable()
    const editButton = document.getElementById('edit-button-weighted-category')
    enableEditButton(editButton)
    enableOneAssignmentInputs('pre')
    enableOneAssignmentInputs('post')
    enableMultipleAssignmentsTable()
  } else if (verifyWeightedCategory() && sumOfWeights() < 100) {
    document.getElementById('validate-table').textContent =
      'The weights must add up to 100%. No more, no less!'
  }
})

document.getElementById('reset-button-weighted-category').addEventListener('click', () => {
  document.getElementById('weighted-categories-table').innerHTML =
    `<tr>
    <th>Category</th>
    <th>Name</th>
    <th>Weight</th>
    <th>Points Earned</th>
    <th>Total Points</th>
  </tr>
  <tr>
    <td>1</td>
    <td>
      <input id="category-1-name">
    </td>
    <td>
      <input id="category-1-weight">
      <label for="category-1-weight">%</label>
    </td>
    <td>
      <input id="category-1-earned-points">
      <label for="category-1-earned-points">points</label>
    </td>
    <td>
      <input id="category-1-total-points">
      <label for="category-1-total-points">points</label>
    </td>
  </tr>`
})

const disableOneAssignmentInputs = id => {
  const form = document.getElementById(`${id}-weighted-grade`)

  const inputs = form.getElementsByTagName('input')
  for (const input of inputs) {
    input.setAttribute('disabled', '')
  }

  document.getElementById(`weighted-grade-button-${id}`).setAttribute('disabled', '')
}

const disableMultipleAssignmentsTable = () => {
  document.getElementById('multiple-assignments-table').classList.remove('enabled')

  const table = document.getElementById('multiple-assignments-container')

  const inputs = table.getElementsByTagName('input')
  for (const input of inputs) {
    input.setAttribute('disabled', '')
  }

  const buttons = table.getElementsByTagName('button')
  for (const button of buttons) {
    if (button.id !== 'edit-button-assignment-table') {
      button.setAttribute('disabled', '')
    }
  }
}

const disableMultipleAssignmentInputs = id => {
  const form = document.getElementById(`${id}-multiple-assignments`)

  const inputs = form.getElementsByTagName('input')
  for (const input of inputs) {
    input.setAttribute('disabled', '')
  }

  document
    .getElementById(`multiple-assignments-weighted-grade-button-${id}`)
    .setAttribute('disabled', '')
}

const enableWeightedCategoriesTable = () => {
  document.getElementById('weighted-categories-table').classList.add('enabled')

  const table = document.getElementById('weighted-categories-container')

  const inputs = table.getElementsByTagName('input')
  for (const input of inputs) {
    input.removeAttribute('disabled')
  }

  const buttons = table.getElementsByTagName('button')
  for (const button of buttons) {
    button.removeAttribute('disabled')
  }
}

document.getElementById('edit-button-weighted-category').addEventListener('click', () => {
  disableOneAssignmentInputs('pre')
  disableOneAssignmentInputs('post')
  disableMultipleAssignmentsTable()
  disableMultipleAssignmentInputs('pre')
  disableMultipleAssignmentInputs('post')
  enableWeightedCategoriesTable()
})


const verifyDeltaCategoryInputs = (id, deltaParameter) => {
  const deltaCategory    = document.getElementById(`delta-category-${id}`).value
  const assignmentPoints = document.getElementById(`assignment-points-${id}`).value

  if (!isNumeric(deltaCategory) || !isNumeric(assignmentPoints) || !isNumeric(deltaParameter)) {
    document.getElementById(`calculate-weighted-grade-${id}`).textContent =
      'Bro fr u gotta fill in numbers'
    return false
  } else if (deltaCategory > categoryNum || deltaCategory <= 0) {
    document.getElementById(`calculate-weighted-grade-${id}`).textContent =
      `The category you inputted doesn't exist! There ${categoryNum > 1 ? 'are' : 'is'} only
      ${categoryNum} ${categoryNum > 1 ? 'categories' : 'category'} fr.`
    return false
  } else if (assignmentPoints < 0) {
    document.getElementById(`calculate-weighted-grade-${id}`).innerHTML =
      `The assignment or test can't be worth a negative amount!
      If it is, you're screwed! (Or you're saved. That depends on your current grade...)
      <div>
      <iframe src="https://giphy.com/embed/3o7buirYcmV5nSwIRW" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <p>
        <a href="https://giphy.com/gifs/emoji-idk-thinking-3o7buirYcmV5nSwIRW"></a>
      </p>
      </div>`
    return false
  }
  return true
}

/**
 * Helper method to calculate a number representing the grade within a weighted category (category
 * grade).
 *
 * @param {number} weight - A percentage representing the weight of the category
 * @param {number} availablePoints - The total number of points in the category
 * @param {number} earnedPoints - The number of points earned in the category
 * @returns The category grade
 */
const categoryGrade = (weight, availablePoints, earnedPoints) => earnedPoints / availablePoints * weight

const currentGradeWeightedTable = () => {
  const table = document.getElementById('weighted-categories-table')
  let currentGrade = 0
  for (let i = 1; i < table.rows.length; i++) {
    const weight          = document.getElementById(`category-${i}-weight`).value
    const availablePoints = document.getElementById(`category-${i}-total-points`).value
    const earnedPoints    = document.getElementById(`category-${i}-earned-points`).value
    currentGrade += categoryGrade(weight, availablePoints, earnedPoints)
  }
  return currentGrade
}

/**
 * Calculates the grade needed on an assignment or test going into a weighted category in order to
 * achieve a desired grade in the class.
 *
 * Postconditions: Outputs a message with the calculated grade needed on the assignment or test
 * to achieve the desired grade in the class.
 */
const weightedGradePre = () => {
  // Calculates the current grade in the category which the assignment is going into
  const deltaCategory             = document.getElementById('delta-category-pre').value
  const deltaWeight               = document.getElementById(
                          `category-${deltaCategory}-weight`).value
  const deltaAvailablePoints      = document.getElementById(
                          `category-${deltaCategory}-total-points`).value
  const deltaEarnedPoints         = document.getElementById(
                          `category-${deltaCategory}-earned-points`).value
  const deltaCategoryCurrentGrade = categoryGrade(deltaWeight,
                          deltaAvailablePoints,
                          deltaEarnedPoints)

  const gradeWanted      = document.getElementById('grade-wanted-weighted-pre').value
  const assignmentPoints = document.getElementById('assignment-points-pre').value
  const differential     = gradeWanted - (currentGradeWeightedTable() - deltaCategoryCurrentGrade)

  // Calculates the grade needed on the assignment or test to achieve the desired grade in the class
  if (assignmentPoints > 0) {
    const gradeNeeded = differential
              * (parseFloat(deltaAvailablePoints) + parseFloat(assignmentPoints))
              / deltaWeight
              - deltaEarnedPoints

    document.getElementById('calculate-weighted-grade-pre').textContent =
      `You'll need a ${parseFloat((gradeNeeded * 100 / assignmentPoints).toFixed(2))}%
      (${parseFloat(gradeNeeded.toFixed(2))} out of ${assignmentPoints} points) on your
      upcoming assignment or test to get a ${gradeWanted}% in the class. Ur fr finna lose some
      limbs! 😀`
  } else {
    // Extra credit
    const multiplicand = differential / deltaCategoryCurrentGrade
    const pointsNeeded = (multiplicand - 1) * deltaEarnedPoints

    document.getElementById('calculate-weighted-grade-pre').textContent =
      `Since your assignment or test is worth zero points, it must be extra credit.
      You'll need ${parseFloat(pointsNeeded.toFixed(2))} points to earn a ${gradeWanted}% in the class.
      Ur fr finna lose some limbs! 😀`
  }
}

document.getElementById('weighted-grade-button-pre').addEventListener('click', event => {
  if (verifyDeltaCategoryInputs(
      'pre', document.getElementById('grade-wanted-weighted-pre').value)) {
    weightedGradePre()
  }
  event.preventDefault()
})


const weightedGradePost = () => {
  const assignmentPoints = document.getElementById('assignment-points-post').value
  const gradeEarned      = document.getElementById('grade-earned-post').value
  const pointsEarned     = assignmentPoints * gradeEarned / 100

  const deltaCategory                = document.getElementById('delta-category-post').value
  const deltaCategoryWeight          = document.getElementById(
                          `category-${deltaCategory}-weight`).value
  const deltaCategoryOldEarnedPoints = document.getElementById(
                          `category-${deltaCategory}-earned-points`).value
  const deltaCategoryOldTotalPoints  = document.getElementById(
                          `category-${deltaCategory}-total-points`).value
  const deltaCategoryOldGrade        = categoryGrade(deltaCategoryWeight,
                             deltaCategoryOldTotalPoints,
                             deltaCategoryOldEarnedPoints)

  const deltaCategoryNewEarnedPoints = parseFloat(deltaCategoryOldEarnedPoints)
                     + parseFloat(pointsEarned)
  const deltaCategoryNewTotalPoints  = parseFloat(deltaCategoryOldTotalPoints)
                     + parseFloat(assignmentPoints)
  const deltaCategoryNewGrade        = categoryGrade(deltaCategoryWeight,
                             deltaCategoryNewTotalPoints,
                             deltaCategoryNewEarnedPoints)

  const currentGrade = currentGradeWeightedTable()
             - deltaCategoryOldGrade
             + deltaCategoryNewGrade

  document.getElementById('calculate-weighted-grade-post').textContent =
    `Bro your overall grade will be ${parseFloat(currentGrade.toFixed(2))}% fr!`
}

document.getElementById('weighted-grade-button-post').addEventListener('click', event => {
  if (verifyDeltaCategoryInputs(
      'post', document.getElementById('grade-earned-post').value)) {
    weightedGradePost()
  }
  event.preventDefault()
})

const verifyAssignmentTable = () => {
  const table = document.getElementById('multiple-assignments-table')
  for (let row = 1; row < table.rows.length; row++) {
    const category     = table.rows[row].cells[2].children[0].value
    const pointsEarned = table.rows[row].cells[3].children[0].value
    const totalPoints  = table.rows[row].cells[4].children[0].value

    if (!isNumeric(category) || !isNumeric(pointsEarned) || !isNumeric(totalPoints)) {
      document.getElementById('validate-assignments-table').textContent =
        '😐 Bro fr you gotta fill out numbers'
      return false
    } else if (category > categoryNum || category < 1) {
      document.getElementById('validate-assignments-table').textContent =
        `The category you inputted doesn't exist! There ${categoryNum > 1 ? 'are' : 'is'} only
        ${categoryNum} ${categoryNum > 1 ? 'categories' : 'category'} fr.`
      return false
    } else if (category < 0 || totalPoints < 0) {
      document.getElementById('validate-assignments-table').textContent =
        '😐 Bro fr try and make a negative value. Do it! I dare you!'
      return false
    }
  }
  return true
}


let assignmentNum = 1
const addAssignment = table => {
  assignmentNum++

  const row = table.insertRow(-1)

  const assignment = row.insertCell(-1)
  assignment.innerHTML = assignmentNum

  const name = row.insertCell(-1)
  name.innerHTML = `<input id="assignment-${assignmentNum}-name">`

  const category = row.insertCell(-1)
  category.innerHTML = `<input id="assignment-${assignmentNum}-category">`

  const earnedPoints = row.insertCell(-1)
  earnedPoints.innerHTML = `<input id="assignment-${assignmentNum}-earned-points">
                points`

  const totalPoints = row.insertCell(-1)
  totalPoints.innerHTML = `<input id="assignment-${assignmentNum}-total-points">
               points`
}

document.getElementById('add-assignment').addEventListener('click', () => {
  if (verifyAssignmentTable()) {
    const table = document.getElementById('multiple-assignments-table')
    addAssignment(table)
  }
})

document.getElementById('delete-assignment-row').addEventListener('click', () => {
  const table = document.getElementById('multiple-assignments-table')
  const index = assignmentNum
  const validationID = 'validate-assignments-table'
  if (deleteRow(table, index, validationID)) {
    assignmentNum--
  }
})

document.getElementById('edit-button-assignment-table').addEventListener('click', () => {
  disableWeightedCategoriesTable()
  disableMultipleAssignmentInputs('pre')
  disableMultipleAssignmentInputs('post')
  enableMultipleAssignmentsTable()
})

const enableMultipleAssignmentsInputs = id => {
  const form = document.getElementById(`${id}-multiple-assignments`)

  const inputs = form.getElementsByTagName('input')
  for (const input of inputs) {
    input.removeAttribute('disabled')
  }

  document
    .getElementById(`multiple-assignments-weighted-grade-button-${id}`)
    .removeAttribute('disabled')
}

document.getElementById('complete-assignment-addition').addEventListener('click', () => {
  if (verifyAssignmentTable()) {
    disableMultipleAssignmentsTable()
    const editButton = document.getElementById('edit-button-assignment-table')
    enableEditButton(editButton)
    enableMultipleAssignmentsInputs('pre')
    enableMultipleAssignmentsInputs('post')
  }
})

document.getElementById('reset-button-assignment-table').addEventListener('click', () => {
  document.getElementById('multiple-assignments-table').innerHTML =
    `<tr>
    <th>assignment</th>
    <th>name</th>
    <th>category</th>
    <th>points earned</th>
    <th>total points</th>
  </tr>
  <tr>
    <td>1</td>
    <td>
      <input id="assignment-1-name" disabled>
    </td>
    <td>
      <input id="assignment-1-category" disabled>
    </td>
    <td>
      <input id="assignment-1-earned-points" disabled>
      <label for="assignment-1-earned-points">points</label>
    </td>
    <td>
      <input id="assignment-1-total-points" disabled>
      <label for="assignment-1-total-points">points</label>
    </td>
  </tr>`
})

const compositeGradeMultipleAssignments = deltaCategory => {
  let currentGrade = 0
  const table = document.getElementById('multiple-assignments-table')

  for (let category = 1; category <= categoryNum; category++) {
    if (category !== deltaCategory) {
      const weight     = parseFloat(document.getElementById(`category-${category}-weight`).value)
      let earnedPoints = parseFloat(document.getElementById(`category-${category}-earned-points`).value)
      let totalPoints  = parseFloat(document.getElementById(`category-${category}-total-points`).value)
      for (let row = 1; row < table.rows.length; row++) {
        const assignmentCategory = parseFloat(table.rows[row].cells[2].children[0].value)
        if (assignmentCategory === category) {
          const assignmentEarnedPoints = parseFloat(table.rows[row].cells[3].children[0].value)
          earnedPoints += assignmentEarnedPoints

          const assignmentTotalPoints = parseFloat(table.rows[row].cells[4].children[0].value)
          totalPoints += assignmentTotalPoints
        }
      }
      currentGrade += categoryGrade(weight, totalPoints, earnedPoints)
    }
  }
  return currentGrade
}

const multipleAssignmentsGradePost = () => {
  const overallGrade = compositeGradeMultipleAssignments(-1)
  document.getElementById('calculate-multiple-assignments-grade-post').textContent =
    `Your overall grade will be ${parseFloat(overallGrade.toFixed(2))}%. GG bro!`
}

document.getElementById('multiple-assignments-weighted-grade-button-post').addEventListener('click', event => {
  multipleAssignmentsGradePost()
  event.preventDefault()
})


const verifyMultipleAssignmentsInputsPre = () => {
  const assignmentCategory = document.getElementById('assignment-category-multiple-assignments-pre').value
  const assignmentPoints   = document.getElementById('assignment-total-points-multiple-assignments-pre').value
  const gradeWanted        = document.getElementById('grade-wanted-multiple-assignments-pre').value

  if (!isNumeric(assignmentCategory) || !isNumeric(assignmentPoints) || !isNumeric(gradeWanted)) {
    document.getElementById('calculate-multiple-assignments-grade-pre').textContent =
      'Bro fr u gotta fill in numbers'
    return false
  } else if (assignmentCategory > categoryNum || assignmentCategory <= 0) {
    document.getElementById('calculate-multiple-assignments-grade-pre').textContent =
      `The category you inputted doesn't exist! There ${categoryNum > 1 ? 'are' : 'is'} only
      ${categoryNum} ${categoryNum > 1 ? 'categories' : 'category'} fr.`
    return false
  } else if (assignmentPoints < 0) {
    document.getElementById('calculate-multiple-assignments-grade-pre').innerHTML =
      `The assignment or test can't be worth a negative amount!
      If it is, you're screwed! (Or you're saved. That depends on your current grade...)
      <div>
      <iframe src="https://giphy.com/embed/3o7buirYcmV5nSwIRW" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <p>
        <a href="https://giphy.com/gifs/emoji-idk-thinking-3o7buirYcmV5nSwIRW"></a>
      </p>
      </div>`
    return false
  }
  return true
}

const multipleAssignmentsGradePre = () => {
  const deltaCategory   = parseFloat(document.getElementById(
                    'assignment-category-multiple-assignments-pre').value)
  const assignmentWorth = document.getElementById(
                    'assignment-total-points-multiple-assignments-pre').value
  const gradeWanted     = document.getElementById(
                    'grade-wanted-multiple-assignments-pre').value

  const deltaCategoryWeight     = document.getElementById(
                        `category-${deltaCategory}-weight`).value
  let deltaCategoryEarnedPoints = parseFloat(document.getElementById(
                        `category-${deltaCategory}-earned-points`).value)
  let deltaCategoryTotalPoints  = parseFloat(document.getElementById(
                        `category-${deltaCategory}-total-points`).value)

  const table = document.getElementById('multiple-assignments-table')
  for (let row = 1; row < table.rows.length; row++) {
    const assignmentCategory = parseFloat(table.rows[row].cells[2].children[0].value)
    if (assignmentCategory === deltaCategory) {
      const assignmentEarnedPoints = parseFloat(table.rows[row].cells[3].children[0].value)
      deltaCategoryEarnedPoints += assignmentEarnedPoints

      const assignmentTotalPoints = parseFloat(table.rows[row].cells[4].children[0].value)
      deltaCategoryTotalPoints += assignmentTotalPoints
    }
  }
  deltaCategoryTotalPoints += parseFloat(assignmentWorth)

  const deltaCategoryGrade = categoryGrade(deltaCategoryWeight,
                       deltaCategoryTotalPoints,
                       deltaCategoryEarnedPoints)

  const differential = gradeWanted
            - deltaCategoryGrade
            - compositeGradeMultipleAssignments(deltaCategory)

  const pointsNeeded = differential
            * deltaCategoryTotalPoints
            / deltaCategoryWeight

  if (assignmentWorth > 0) {
    const gradeNeeded  = pointsNeeded
              / assignmentWorth
              * 100
    document.getElementById('calculate-multiple-assignments-grade-pre').textContent =
      `You will need a ${parseFloat(gradeNeeded.toFixed(2))}% on your assignment or test
      (${parseFloat(pointsNeeded.toFixed(2))} out of ${assignmentWorth} points) to get a
      ${gradeWanted}% in your class. Ur fr finna lose some limbs bro!`
  } else {
    document.getElementById('calculate-multiple-assignments-grade-pre').textContent =
      `Since your assignment or test is worth zero points, it must be extra credit. You
      will need to earn ${parseFloat(pointsNeeded.toFixed(2))} points in order to earn a
      ${gradeWanted}% in your class. Good luck!`
  }
}

document.getElementById('multiple-assignments-weighted-grade-button-pre').addEventListener('click', event => {
  if (verifyMultipleAssignmentsInputsPre()) {
    multipleAssignmentsGradePre()
  }
  event.preventDefault()
})


const finalWorthWeighted = (finalPoints, categoryTotalPoints, categoryWeight) =>
  finalPoints / (parseFloat(categoryTotalPoints) + parseFloat(finalPoints)) * categoryWeight

// negative points??? what's the deal with that
document.getElementById('calculate-final-worth-weighted').addEventListener('click', event => {
  const categoryWeight      = document.getElementById('category-weight-final-worth-weighted').value
  const finalPoints         = document.getElementById('final-points-final-worth-weighted').value
  const categoryTotalPoints = document.getElementById('weighted-category-points-final-worth-weighted').value

  if (isNumeric(categoryWeight) && isNumeric(finalPoints) && isNumeric(categoryTotalPoints)) {
    if (finalPoints < 0) {
      document.getElementById('output-final-worth-weighted').innerHTML =
        `You can't have a final worth negative points going in! Unless your teacher is evil...in which case 😐
        <div>
          <iframe src="https://giphy.com/embed/3o7buirYcmV5nSwIRW" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          <p>
          <a href="https://giphy.com/gifs/emoji-idk-thinking-3o7buirYcmV5nSwIRW"></a>
          </p>
        </div>`
    }  else if (parseFloat(categoryTotalPoints) + parseFloat(finalPoints) === 0) {
      document.getElementById('output-final-worth-weighted').innerHTML =
        `Your final is worth ∞% of your overall grade. Interesting...
        <div>
          <iframe src="https://giphy.com/embed/3o7buirYcmV5nSwIRW" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          <p>
          <a href="https://giphy.com/gifs/emoji-idk-thinking-3o7buirYcmV5nSwIRW"></a>
          </p>
        </div>`
    } else if (parseFloat(finalPoints) === 0) {
      document.getElementById('output-final-worth-weighted').textContent =
        'Your final is worth 0% of your overall grade.'
    } else {
      const finalWorth = finalWorthWeighted(finalPoints, categoryTotalPoints, categoryWeight)
      document.getElementById('output-final-worth-weighted').textContent =
        `Your final is worth ${parseFloat(finalWorth.toFixed(2))}% of your overall grade.`
    }
  } else {
    document.getElementById('output-final-worth-weighted').textContent =
      '😐 Bro fr you gotta fill in numbers'
  }
  event.preventDefault()
})


const verifyExtraCreditPointsOnly = (classTotalPoints, earnedPoints, gradeWantedOrECWorth, id) => {
  if (!isNumeric(classTotalPoints) || !isNumeric(earnedPoints) || !isNumeric(gradeWantedOrECWorth)) {
    document.getElementById(id).textContent =
      '😐 Bro fr you gotta fill in numbers'
    return false
  }
  return true
}

const extraCreditNeededPointsOnly = (classTotalPoints, earnedPoints, gradeWanted) =>
  gradeWanted * classTotalPoints - earnedPoints

document.getElementById('calculate-pre-ec-points-only').addEventListener('click', event => {
  const classTotalPoints = document.getElementById('class-points-pre-ec-points-only').value
  const earnedPoints     = document.getElementById('earned-points-pre-ec-points-only').value
  const gradeWanted      = document.getElementById('grade-wanted-pre-ec-points-only').value

  if (verifyExtraCreditPointsOnly(classTotalPoints, earnedPoints, gradeWanted, 'ec-needed-pre-ec-points-only')) {
    const extraCreditNeeded = extraCreditNeededPointsOnly(classTotalPoints,
                                earnedPoints,
                                gradeWanted / 100)

    document.getElementById('ec-needed-pre-ec-points-only').textContent =
      `You'll need to earn ${parseFloat(extraCreditNeeded.toFixed(2))} points of extra credit
      in order to achieve a ${gradeWanted}% in your class. Good luck!`
  }
  event.preventDefault()
})


const overallGradeExtraCreditPointsOnly = (classTotalPoints, earnedPoints, extraCreditPoints) =>
  (parseFloat(earnedPoints) + parseFloat(extraCreditPoints)) / classTotalPoints

document.getElementById('calculate-post-ec-points-only').addEventListener('click', event => {
  const classTotalPoints  = document.getElementById('class-points-post-ec-points-only').value
  const earnedPoints      = document.getElementById('earned-points-post-ec-points-only').value
  const extraCreditPoints = document.getElementById('ec-points-post-ec-points-only').value

  if (verifyExtraCreditPointsOnly(classTotalPoints, earnedPoints, extraCreditPoints, 'overall-grade-post-ec-points-only')) {
    if (parseFloat(classTotalPoints) === 0) {
      if (parseFloat(extraCreditPoints) + parseFloat(earnedPoints) < 0) {
        document.getElementById('overall-grade-post-ec-points-only').textContent =
          `You have 0 points in your class and because your earned points are still negative, you have
          a -∞% in the class. Have fun climbing up the abyss!`
      } else if (parseFloat(extraCreditPoints) + parseFloat(earnedPoints) === 0) {
        document.getElementById('overall-grade-post-ec-points-only').textContent =
          `Your grade is undefined. Congratulations. You broke the simulation!`
      } else {
        document.getElementById('overall-grade-post-ec-points-only').textContent =
          `Bruh. You have an ∞% in the class. Good job!`
      }
    } else {
      const overallGrade = overallGradeExtraCreditPointsOnly(classTotalPoints, earnedPoints, extraCreditPoints) * 100
      document.getElementById('overall-grade-post-ec-points-only').textContent =
        `Your overall grade will be ${parseFloat(overallGrade.toFixed(2))}% after your extra credit goes in.`
    }
  }
  event.preventDefault()
})
