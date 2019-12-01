const landingServices = {
  login(formData) {
    return new Promise((resolve, reject) => {
      if (formData) {
        setTimeout(() => resolve(formData), 500)
      }
    })
  }
}

export { landingServices }
