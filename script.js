document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const inputData = document.getElementById('inputData').value;
    console.log('Input Data:', inputData); // Debugging output
  
    try {
      const response = await fetch('/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputData }),
      });
      const result = await response.json();
      console.log('Server Response:', result); // Debugging output
    } catch (error) {
      console.error('Error:', error); // Debugging output
    }
  });