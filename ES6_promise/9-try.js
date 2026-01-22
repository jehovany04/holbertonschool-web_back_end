export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(String(error));
  }
  queue.push('Guardrail was processed');
  return queue;
}