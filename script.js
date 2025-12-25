// ===== Helper function =====
function hasLetters(name, letters) {
  for (let l of letters) {
    if (name.includes(l)) return true;
  }
  return false;
}

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
    if (["خ", "ج"].some(l => firstName.includes(l))) {
      receiver = "نورا صبري";
      alternate = "شيماء عبد الرازق - هالة طلعت";
    } else {
      receiver = "شيماء عبدالرازق";
      alternate = "غادة - نورا";
    }
  }

  // ===== موظف =====
  else if (type === "employee") {

    if (["س", "غ"].includes(firstLetter)) {
      receiver = "غادة عبد اللطيف";
      alternate = "سارة - نورا";
    }

    else if (["ه", "ف", "ت"].includes(firstLetter)) {
      receiver = "هالة طلعت";
      alternate = "سامح - إيميل";
    }

    else if (firstLetter === "أ" && gender === "male") {
      receiver = "إيميل جرجس";
      alternate = "سارة - ميار";
    }

    else if (["ب", "ي"].includes(firstLetter) || firstName === "احمد") {
      receiver = "نورهان كمال";
      alternate = "منة - سامح";
    }

    else if (firstName === "محمد" && fatherName[0] >= "ش") {
      receiver = "سامح جمال";
      alternate = "رضوي - هالة طلعت";
    }

    else if ((firstLetter === "أ" && gender === "female") || ["ظ", "ن"].includes(firstLetter)) {
      receiver = "منة الله صلاح";
      alternate = "رضوي - سامح";
    }

    else if (["ع", "ش", "ض", "ق"].includes(firstLetter) || firstName === "مصطفي") {
      receiver = "سارة عادل";
      alternate = "إيميل - نورهان";
    }

    else if (["ز", "و", "ص", "م"].includes(firstLetter) && !["محمد", "مصطفي", "محمود"].includes(firstName)) {
      receiver = "رضوي أحمد";
      alternate = "ميار - سارة";
    }

    else if (firstName === "محمد" && fatherName[0] >= "أ" && fatherName[0] <= "س") {
      receiver = "ميار محمد";
      alternate = "منة - نورهان";
    }

    // ✅ إضافة شرط الحروف "ج" و "خ" للموظفين
    else if (hasLetters(firstName, ["ج", "خ"])) {
      receiver = "نورا صبري";
      alternate = "شيماء عبد الرازق - هالة طلعت";
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
