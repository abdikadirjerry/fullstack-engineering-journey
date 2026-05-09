// ❓ Merge two objects using spread operator
const baseInfo = { id: 101, status: "Active" };
const personalInfo = { name: "Najio", email: "najio@example.com" };

const fullProfile = { ...baseInfo, ...personalInfo };

console.log("Full Profile:", fullProfile);
