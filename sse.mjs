"use strict"


export default (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive"
  })

  req.on("close", () => {
    res.end()
  })

  setInterval(() => {
    res.write("data: " + new Date() + "\n\n")
  }, 1000)
}

