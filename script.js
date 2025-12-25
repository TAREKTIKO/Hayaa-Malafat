function findReceiver() {
  const name = document.getElementById("fullName").value.trim();
  const type = document.getElementById("type").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  if (!name || !type || !gender) {
    alert("من فضلك اكمل البيانات");
    return;
  }

  const parts = name.split(" ");
  const firstName = parts[0];
  const fatherName = parts[1] || "";
  const firstLetter = firstName[0];

  let receiver = "";
  let alternate = "";

  // ===== عقد =====
  if (type === "contract") {
    receiver = "قسم التعيينات";
    alternate = "لا يوجد";
  }

  // ===== عامل =====
  else if (type === "worker") {
    if (["خ", "ج"].includes(firstLetter)) {
      receiver = "نورا صبري";
      alternate = "شيماء عبد الرازق - هالة طلعت";
    } else {
      receiver = "شيماء عبدالرازق";
      alternate = "غادة - نورا";
    }
  }

  // ===== موظف =====
  else if (type === "employee") {

    // 1️⃣ غادة عبد اللطيف
    if (["س", "غ"].includes(firstLetter)) {
      receiver = "غادة عبد اللطيف";
      alternate = "سارة - نورا";
    }

    // 2️⃣ هالة طلعت
    else if (["هـ", "ف", "ت"].includes(firstLetter)) {
      receiver = "هالة طلعت";
      alternate = "سامح - إيميل";
    }

    // 3️⃣ إيميل جرجس
    else if (firstLetter === "أ" && gender === "male") {
      receiver = "إيميل جرجس";
      alternate = "سارة - ميار";
    }

    // 4️⃣ نورهان كمال
    else if (["ب", "ي"].includes(firstLetter) || firstName === "احمد") {
      receiver = "نورهان كمال";
      alternate = "منة - سامح";
    }

    // 5️⃣ سامح جمال
    else if (firstName === "محمد" && fatherName[0] >= "ش") {
      receiver = "سامح جمال";
      alternate = "رضوي - هالة طلعت";
    }

    // 6️⃣ منة الله
    else if (
      (firstLetter === "أ" && gender === "female") ||
      ["ظ", "ن"].includes(firstLetter)
    ) {
      receiver = "منة الله صلاح";
      alternate = "رضوي - سامح";
    }

    // 7️⃣ سارة عادل
    else if (["ع", "ش", "ض", "ق"].includes(firstLetter) || firstName === "مصطفي") {
      receiver = "سارة عادل";
      alternate = "إيميل - نورهان";
    }

    // 8️⃣ رضوي أحمد
    else if (
      ["ز", "و", "ص", "م"].includes(firstLetter) &&
      !["محمد", "مصطفي", "محمود"].includes(firstName)
    ) {
      receiver = "رضوي أحمد";
      alternate = "ميار - سارة";
    }

    // 9️⃣ ميار محمد
    else if (
      firstName === "محمد" &&
      fatherName[0] >= "أ" &&
      fatherName[0] <= "س"
    ) {
      receiver = "ميار محمد";
      alternate = "منة - نورهان";
    }

    else {
      receiver = "غير محدد";
      alternate = "—";
    }
  }

  document.getElementById("receiver").textContent = receiver;
  document.getElementById("alternate").textContent = alternate;
  document.getElementById("result").style.display = "block";
}
