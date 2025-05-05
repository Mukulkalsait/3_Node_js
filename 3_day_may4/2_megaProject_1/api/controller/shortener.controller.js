const shortener = require('../../src/shorterenr/index.js');

function createShortLink(req, res) {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'Missing URL' });
  }

  try {
    const code = shortener.createShortLink(url); // Try to create a short link
    res.status(201).json({ shortCode: code }); // If success, send back the short code
  } catch (err) {
    res.status(500).json({ error: 'Failed to create short link' }); // If error, return a 500
  }
}

function getOriginalUrl(req, res) {
  const { code } = req.params;

  const url = shortener.getOriginalUrl(code);
  if (!url) {
    return res.status(404).json({ error: 'Short code not found' });
  }

  res.redirect(url);
}

function listLinks(req, res) {
  const links = shortener.listLinks();
  res.json({ links });
}

module.exports = {
  createShortLink,
  getOriginalUrl,
  listLinks,
};
