export default {
  error: {
    forgotPassword: {
      too_many_requests:
        'คุณพยายามเปลี่ยนรหัสผ่าน คุณถึงขีด จำกัด แล้ว โปรดรอก่อนลองอีกครั้ง',
      'lock.fallback': "ขออภัยเกิดข้อผิดพลาดเมื่อขอเปลี่ยนรหัสผ่าน",
      enterprise_email:
        "โดเมนอีเมลของคุณเป็นส่วนหนึ่งของผู้ให้ข้อมูลประจำตัวขององค์กร หากคุณต้องการรีเซ็ตรหัสผ่านโปรดดูผู้ดูแลระบบความปลอดภัยของคุณ"
    },
    login: {
      blocked_user: 'ผู้ใช้ถูกบล็อก',
      invalid_user_password: 'ข้อมูลรับรองผิด',
      'lock.fallback': "ขออภัยเกิดข้อผิดพลาดขณะพยายามลงชื่อเข้าใช้",
      'lock.invalid_code': 'รหัสผิด.',
      'lock.invalid_email_password': 'อีเมลหรือรหัสผ่านผิด',
      'lock.invalid_username_password': 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
      'lock.network': 'เราไม่สามารถเข้าถึงเซิร์ฟเวอร์ โปรดตรวจสอบการเชื่อมต่อของคุณแล้วลองอีกครั้ง',
      'lock.popup_closed': 'ปิดหน้าต่างป๊อปอัพ ลองอีกครั้ง.',
      'lock.unauthorized': 'ไม่อนุญาต. ลองอีกครั้ง.',
      'lock.mfa_registration_required':
        'Multifactor ต้องการการรับรองความถูกต้อง แต่อุปกรณ์ของคุณไม่ได้ลงทะเบียน กรุณาลงทะเบียนก่อนที่จะย้าย',
      'lock.mfa_invalid_code': 'รหัสผิด. กรุณาลองอีกครั้ง.',
      password_change_required:
        'คุณต้องอัปเดตรหัสผ่านของคุณเพราะนี่เป็นครั้งแรกที่คุณเข้าสู่ระบบหรือรหัสผ่านของคุณหมดอายุ', // TODO: verify error code
      password_leaked:
        'เราตรวจพบปัญหาความปลอดภัยที่อาจเกิดขึ้นกับบัญชีนี้ เพื่อปกป้องบัญชีของคุณเราได้ปิดกั้นการเข้าสู่ระบบนี้ มีการส่งอีเมลพร้อมคำแนะนำเกี่ยวกับวิธียกเลิกการปิดกั้นบัญชีของคุณ',
      too_many_attempts: 'บัญชีของคุณถูกบล็อกหลังจากพยายามลงชื่อเข้าใช้หลายครั้งติดต่อกัน',
      too_many_requests: 'พวกเราขอโทษ. มีคำขอมากเกินไปในขณะนี้ โปรดโหลดหน้าเว็บและลองอีกครั้ง. หากยังคงมีอยู่โปรดลองอีกครั้งในภายหลัง',
      session_missing:
        "ไม่สามารถดำเนินการตามคำขอการตรวจสอบสิทธิ์ของคุณ โปรดลองอีกครั้งหลังจากปิดกล่องโต้ตอบที่เปิดอยู่ทั้งหมด",
      'hrd.not_matching_email': 'กรุณาใช้อีเมล บริษัท ของคุณเพื่อเข้าสู่ระบบ'
    },
    passwordless: {
      'bad.email': 'อีเมลไม่ถูกต้อง',
      'bad.phone_number': 'หมายเลขโทรศัพท์ไม่ถูกต้อง',
      'lock.fallback': "ขออภัยเกิดข้อผิดพลาด"
    },
    signUp: {
      invalid_password: 'รหัสผ่านไม่ถูกต้อง',
      'lock.fallback': "ขออภัยเกิดข้อผิดพลาดขณะพยายามสมัคร",
      password_dictionary_error: 'รหัสผ่านธรรมดาเกินไป',
      password_no_user_info_error: 'รหัสผ่านขึ้นอยู่กับข้อมูลผู้ใช้',
      password_strength_error: 'รหัสผ่านอ่อนแอเกินไป',
      user_exists: 'มีผู้ใช้นี้อยู่แล้ว',
      username_exists: 'ชื่อผู้ใช้นี้มีอยู่แล้ว',
      social_signup_needs_terms_acception: 'โปรดยอมรับข้อกำหนดและเงื่อนไขด้านล่างเพื่อดำเนินการต่อ'
    }
  },
  success: {
    // success messages show above the form or in a confirmation pane
    logIn: 'ขอขอบคุณที่ลงชื่อเข้าใช้',
    forgotPassword: 'เราเพิ่งส่งอีเมลถึงคุณเพื่อรีเซ็ตรหัสผ่านของคุณ',
    magicLink: 'เราส่งลิงค์ให้คุณเพื่อเข้าสู่ระบบ <br />ถึง %s',
    signUp: 'ขอขอบคุณที่สมัครใช้งาน'
  },
  blankErrorHint: "ต้องไม่เว้นว่าง",
  codeInputPlaceholder: 'รหัสยืนยัน',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'หรือ',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'หรือ',
  emailInputPlaceholder: 'yours@example.com',
  enterpriseLoginIntructions: 'เข้าสู่ระบบด้วยข้อมูลประจำตัวขององค์กรของคุณ',
  enterpriseActiveLoginInstructions: 'โปรดป้อนข้อมูล บริษัท ของคุณที่ %s.',
  failedLabel: 'ล้มเหลว!',
  forgotPasswordTitle: 'รีเซ็ตรหัสผ่านของคุณ',
  forgotPasswordAction: "ลืมรหัสผ่านหรือไม่?",
  forgotPasswordInstructions:
    'กรุณากรอกอีเมลของคุณ เราจะส่งอีเมลเพื่อรีเซ็ตรหัสผ่านของคุณ',
  forgotPasswordSubmitLabel: 'ส่งอีเมล',
  invalidErrorHint: 'รายการไม่ถูกต้อง',
  lastLoginInstructions: 'ครั้งสุดท้ายที่คุณเข้าสู่ระบบด้วย',
  loginAtLabel: 'เข้าสู่ระบบที่ %s',
  loginLabel: 'เข้าสู่ระบบ',
  loginSubmitLabel: 'เข้าสู่ระบบ',
  loginWithLabel: 'เข้าสู่ระบบด้วย%s',
  notYourAccountAction: 'ไม่ใช่บัญชีของคุณ?',
  passwordInputPlaceholder: 'รหัสผ่านของคุณ',
  passwordStrength: {
    containsAtLeast: 'มีอย่างน้อย %d ตัวอักษรประเภท %d ต่อไปนี้:',
    identicalChars: 'ไม่เกิน %d อักขระที่เหมือนกันในหนึ่งแถว (ตัวอย่างเช่นไม่อนุญาต "%s")',
    nonEmpty: 'รหัสผ่านจะต้องไม่เว้นว่าง',
    numbers: 'ตัวเลข (เช่น 0-9)',
    lengthAtLeast: 'อย่างน้อย %d ตัวอักษร',
    lowerCase: 'ตัวพิมพ์เล็ก (a-z)',
    shouldContain: 'ควรมี:',
    specialCharacters: 'อักขระพิเศษ (เช่น !@#$%^&*)',
    upperCase: 'อักษรตัวพิมพ์ใหญ่(A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'มิฉะนั้นป้อนอีเมลของคุณเพื่อเข้าสู่ระบบ<br/>หรือสร้างบัญชี',
  passwordlessEmailCodeInstructions: 'ส่งอีเมลพร้อมรหัสไปที่ %s',
  passwordlessEmailInstructions: 'ป้อนอีเมลของคุณเพื่อลงชื่อเข้าใช้<br/>หรือสร้างบัญชี',
  passwordlessSMSAlternativeInstructions:
    'มิฉะนั้นให้ป้อนโทรศัพท์ของคุณเพื่อลงชื่อเข้าใช้<br/>หรือสร้างบัญชี',
  passwordlessSMSCodeInstructions: 'SMS พร้อมรหัสส่งถึง<br/>ถึง %s',
  passwordlessSMSInstructions: 'ป้อนโทรศัพท์ของคุณเพื่อลงชื่อเข้าใช้<br/>หรือสร้างบัญชี',
  phoneNumberInputPlaceholder: 'หมายเลขโทรศัพท์ของคุณ',
  resendCodeAction: 'ไม่ได้รับรหัสผ่าน?',
  resendLabel: 'ส่งซ้ำ',
  resendingLabel: 'การส่ง...',
  retryLabel: 'ลองอีกครั้ง',
  sentLabel: 'เพิ่งส่ง!',
  showPassword: 'แสดงรหัสผ่าน',
  signUpTitle: 'สร้างบัญชี',
  signUpLabel: 'สร้างบัญชี',
  signUpSubmitLabel: 'สร้างบัญชี',
  signUpTerms: 'ในการลงทะเบียนคุณยอมรับข้อกำหนดในการให้บริการและนโยบายความเป็นส่วนตัวของเรา',
  signUpWithLabel: 'ลงทะเบียนกับ %s',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'Single sign-on เปิดอยู่',
  submitLabel: 'ส่งข้อมูล',
  unrecoverableError: 'บางอย่างผิดพลาด.<br/>โปรดติดต่อฝ่ายสนับสนุนทางเทคนิค',
  usernameFormatErrorHint:
    'ใช้อักขระต่อไปนี้ %d-%d ตัวเลขและอักขระ: "_", ".", "+", "-"',
  usernameInputPlaceholder: 'ชื่อผู้ใช้ของคุณ',
  usernameOrEmailInputPlaceholder: 'ชื่อผู้ใช้หรืออีเมล',
  title: 'Auth0',
  welcome: 'ยินดีต้อนรับ %s!',
  windowsAuthInstructions: 'You are connected from your corporate network&hellip;',
  windowsAuthLabel: 'การรับรองความถูกต้องของ Windows',
  mfaInputPlaceholder: 'รหัส',
  mfaLoginTitle: '2 ขั้นตอนการตรวจสอบ',
  mfaLoginInstructions: 'โปรดป้อนรหัสยืนยันที่สร้างโดยแอปพลิเคชันมือถือของคุณ',
  mfaSubmitLabel: 'เข้าสู่ระบบ',
  mfaCodeErrorHint: 'ใช้ตัวเลข %d ตัว'
};
