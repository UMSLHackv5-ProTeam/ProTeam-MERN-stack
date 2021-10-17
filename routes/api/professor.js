const router = require(express.Router())
let Professor = require('../models/Professors.model')

router.route('/').get((req, res) => {
  Professor.find()
    .then(profs => res.json(profs))
    .catch(err => res.status(400).json('Error: ' + err))
})

// router.route('/process-reply').post((req, res) => {
//   const to = req.body.to
//   const from = req.body.from
//   const thread_id = req.body.thread_id
//   const reply_flag = req.body.reply_flag
//   const timestamp = req.body.timestamp
//   const bcc_code = req.body.bcc_code
//   const reply_status = false

  

//   newProfessor.save()
//     .then(() => res.json('Professor added!'))
//     .catch(err => res.status(400).json('Error: ' + err))
// })

module.exports = router