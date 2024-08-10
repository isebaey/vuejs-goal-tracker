Vue.createApp({
  data() {
    return {
      goals: [],
      enterdValue: "",
      nextId: 1,
    };
  },
  methods: {
    addGoal() {
      if (this.enterdValue.trim()) {
        this.goals.push({ id: this.nextId++, text: this.enterdValue });
        this.enterdValue = "";
      } else {
        alert("Please enter a goal.");
      }
    },
    removeGoal() {
      if (this.goals.length > 0) {
        this.goals.pop();
      } else {
        alert("No more goals to remove.");
      }
    },
    resetGoals() {
      if (confirm("Are you sure you want to reset all goals?")) {
        this.goals = [];
      }
    },
    editGoal(id) {
      const newGoal = prompt("Edit your goal:");
      if (newGoal) {
        const goal = this.goals.find((goal) => goal.id === id);
        if (goal) {
          goal.text = newGoal;
        }
      }
    },
    deleteGoal(id) {
      if (confirm("Are you sure you want to delete this goal?")) {
        this.goals = this.goals.filter((goal) => goal.id !== id);
      }
    },
  },
}).mount("#app");
