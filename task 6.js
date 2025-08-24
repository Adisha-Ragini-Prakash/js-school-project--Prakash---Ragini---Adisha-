<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Accessible Timeline</title>
  <style>
    body { font-family: sans-serif; background: #fff; color: #000; }
    button:focus { outline: 2px solid #000; }
    .timeline [aria-current="step"] { font-weight: bold; }
  </style>
</head>
<body>

<!-- Timeline -->
<div class="timeline" role="list" aria-label="Timeline">
  <button role="listitem" aria-current="step" tabindex="0" id="marker1">1990</button>
  <button role="listitem" tabindex="0">2000</button>
  <button role="listitem" tabindex="0">2010</button>
</div>

<!-- Modal Trigger -->
<button id="openModal" aria-haspopup="dialog">Open Modal</button>

<!-- Accessible Modal -->
<dialog id="modal" role="dialog" aria-modal="true" aria-labelledby="title">
  <h2 id="title">Event Details</h2>
  <p>Info about this timeline event.</p>
  <button id="closeModal">Close</button>
</dialog>

<script>
  const modal = document.getElementById('modal');
  const open = document.getElementById('openModal');
  const close = document.getElementById('closeModal');
  let lastFocus;

  open.onclick = () => { lastFocus = document.activeElement; modal.showModal(); close.focus(); };
  close.onclick = () => { modal.close(); lastFocus.focus(); };
  modal.addEventListener('keydown', e => { if (e.key === 'Escape') close.click(); });

  modal.addEventListener('keydown', e => {
    const focusables = modal.querySelectorAll('button');
    if (e.key === 'Tab') {
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  const markers = document.querySelectorAll('.timeline button');
  markers.forEach((m, i) => m.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') markers[i + 1]?.focus();
    if (e.key === 'ArrowLeft') markers[i - 1]?.focus();
  }));
</script>

</body>
</html>