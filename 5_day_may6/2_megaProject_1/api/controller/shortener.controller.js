const shortener = require('../../src/shorterenr/index.js');

// FUN:  1.
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

// FUN:  2.
function getOriginalUrl(req, res) {
  const { code } = req.params;

  const url = shortener.getOriginalUrl(code);
  if (!url) {
    return res.status(404).json({ error: 'Short code not found' });
  }

  res.redirect(url);
}

// FUN:  3.
function listLinks(req, res) {
  const links = shortener.listLinks();
  res.json({ links });
}

module.exports = {
  createShortLink,
  getOriginalUrl,
  listLinks,
};

/* TAG: App_info
   111 : api/controllers/shortener.controller.js →
   Express route handlers (controllers) These are functions that:  (The bridge between the web/API interface and core logic.)
   ----------------------------------------------------------------------------------------------------------------------------
    1. Handle requests from the browser or API client
    2. Extract inputs from req.body or req.params
    3. Call business logic (from src/shortener/index.js)
    4. Return responses (res.json, res.redirect)
  ==================================================

FUN: 
----------------------------------------------------
   1. Function that interect with web: 
        a. check header,
        b.try to chorten link {shortnre.creteChortLink}. result in shortcode or error.
   2. INTERACT WITH WEB :=> Saves parameter in 'code' => fetch from {shorotener.getOrignalUrl}, or 404. => redirect to URL.
   3. when requested => give whole list.
*/
