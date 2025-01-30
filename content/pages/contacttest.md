---
type: PageLayout
title: Empty page
sections:
  - type: TextSection
    colors: colors-f
    variant: variant-a
    title: This in an empty page
    subtitle: The section subtitle
    text: |-
      # Contact Us

      We’d love to hear from you! Please fill out the form below.

      <form
        name="contact"
        method="POST"
        action="/success"
        netlify
        netlify-honeypot="bot-field"
        style="display: flex; flex-direction: column; gap: 1rem;"
      >
        <!-- Hidden field to avoid spam bots -->
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>

        <label>
          Name:
          <input type="text" name="name" required />
        </label>

        <label>
          Email:
          <input type="email" name="email" required />
        </label>

        <label>
          Coogi to Buy:
          <input type="text" name="coogi" required />
        </label>

        <label>
          Message:
          <textarea name="message" rows="4" required></textarea>
        </label>

        <button type="submit">Submit</button>
      </form>
    elementId: ''
    styles:
      self:
        height: auto
        width: narrow
        padding:
          - pt-12
          - pb-36
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
addTitleSuffix: true
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg2.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 80
---
