module.exports = {
  getHouse: (req, res) => {
    const db = req.app.get("db"),
      { id } = req.params;

    db.get_house()
      .then(response => res.status(200).json(response))
      .catch(error => res.status(500).send(`Get houses: ${error}`));
  },
  createHouse: (req, res) => {
    const db = req.app.get('db'),
    {name, address, city, state, zip_code, image_url, monthly_mortgage, monthly_rent} = req.body

    db.create_house(name, address, city, state, zip_code, image_url, monthly_mortgage, monthly_rent)
    .then(response => res.status(200).send(response))
    .catch(error => res.status(500).send(`Create: ${error}`))
    },
  delete: (req, res, next) => {
    const db = req.app.get("db"),
      { id } = req.params;

    db.delete_house(id)
      .then(() => res.sendStatus(200))
      .catch(error => res.status(500).send(`Delete: ${error}`));
  },
  updateOne: (req,res) => {
    const db = req.app.get('db'),
        { name, address, city, state, zipcode, image_url, monthly_rent, monthly_mortgage } = req.body,
        { id } = req.params
    console.log(`Hello`)
    db.update_house( id, name, address, city, state, zipcode, image_url, monthly_rent, monthly_mortgage )
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).send(`Update house: ${error}`))
 }
};
