---
type: PageLayout
title: Empty page
sections:
  - type: TextSection
    colors: colors-f
    variant: variant-a
    title: This in an empty page
    subtitle: The section subtitle
    text: >-
      # Contact Us


      We’d love to hear from you! Please fill out the form below, and we’ll get
      back to you as soon as possible.


      <form
        name="contact"
        method="POST"
        data-netlify="true"
        action="/success"
        style="display: flex; flex-direction: column; gap: 1rem;"
      >
        <!-- Hidden input for Netlify Forms -->
        <input type="hidden" name="form-name" value="contact" />

        <label>
          Name:
          <input
            type="text"
            name="name"
            required
            style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; width: 100%;"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            required
            style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; width: 100%;"
          />
        </label>

        <label>
          Coogi to Buy:
          <input
            type="text"
            name="coogi"
            required
            style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; width: 100%;"
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            rows="4"
            required
            style="padding: 0.5rem; border: 1px solid #ccc; border-radius: 4px; width: 100%;"
          ></textarea>
        </label>

        <button
          type="submit"
          style="background-color: #007BFF; color: white; padding: 0.75rem; border: none; border-radius: 4px; cursor: pointer;"
        >
          Submit
        </button>
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
