function toggleBox(clickedBox) {
    const boxes = document.querySelectorAll('.box');
  
    boxes.forEach((box) => {
      if (box !== clickedBox) {
        box.classList.remove('expanded');
      }
    });
  
    clickedBox.classList.toggle('expanded');
  }
  