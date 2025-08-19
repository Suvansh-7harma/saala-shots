export function validate(schema, source = 'body') {
  return (req, _res, next) => {
    try {
      const data = schema.parse(req[source])
      req[source] = data
      next()
    } catch (err) {
      next(err)
    }
  }
}
