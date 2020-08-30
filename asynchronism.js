/** An example of how does a callback,
 * promise and async-await look */

function requestHandlerCallback(req, res) {
  user.findById(req.UserId, function (err, user) {
    if (err) {
      res.send(err);
    } else {
      Tasks.findById(user.tasksId, function (err, tasks) {
        if (err) {
          return res.send(err);
        } else {
          tasks.completed = true;
          tasks.save(function (err) {
            if (err) {
              return res.send(err);
            } else {
              res.send("Tasks completed");
            }
          });
        }
      });
    }
  });
}

function requestHandlerPromise(req, res) {
  User.findById(req.UserId)
    .then(function (user) {
      return Tasks.findById(user.tasksId);
    })
    .then(function (tasks) {
      tasks.completed = true;
      return tasks.save();
    })
    .then(function () {
      res.send("Tasks completed");
    })
    .catch(function (err) {
      res.send(err);
    });
}

async function requestHandlerAsyncAwait(req, res) {
  try {
    const user = await User.findById(req.userId);
    const tasks = await Tasks.findById(user.tasksId);
    tasks.completed = true;
    await tasks.save();
    res.send("Tasks completed");
  } catch (e) {
    res.send(e);
  }
}
