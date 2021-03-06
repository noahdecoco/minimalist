const PRIORITY_REGEX = new RegExp("![1-6](?=\\s|$)", "g");
const EFFORTS_REGEX = new RegExp("#[1-6](?=\\s|$)", "g");

class Task {
  values = "";
  description = "";
  notes = "";
  priorityOptions = 6;
  priority = 6;
  effortOptions = 6;
  effort = 1;
  isCompleted = false;
  createdAt = new Date().getTime().toString();

  constructor(values) {
    this._id = this.createdAt;

    this.values = values;

    this.description = this.removeFromValues(values, [
      PRIORITY_REGEX,
      EFFORTS_REGEX
    ]);

    this.priority = this.extractNumberFromValues(
      values,
      PRIORITY_REGEX,
      this.priority
    );

    this.effort = this.extractNumberFromValues(
      values,
      EFFORTS_REGEX,
      this.effort
    );
  }

  extractNumberFromValues(values, regex, currentValue) {
    const value = values.match(regex);
    return value ? Number(value[0].slice(1)) : currentValue;
  }

  removeFromValues(values, regexes) {
    let value = values;
    regexes.forEach(regex => {
      value = value.replace(regex, "");
    });
    return value.trim();
  }
}

export default Task;
