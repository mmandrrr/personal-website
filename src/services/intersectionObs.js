export const intersectionObs = (thresholdValue, elem) => {
    function onEntry(entry) {
        entry.forEach(change => {
          if (change.isIntersecting) {
            change.target.classList.add('element-show');
          } 
        });
      }
      let options = { threshold: thresholdValue };
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll(elem);
      for (let elm of elements) {
        observer.observe(elm);
      }
}