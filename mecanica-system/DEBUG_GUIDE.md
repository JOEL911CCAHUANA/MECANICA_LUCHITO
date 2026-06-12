# 🔧 GUÍA DE SOLUCIÓN DE PROBLEMAS - Módulo Mecánicos

## 📋 CHECKLIST DE CONFIGURACIÓN

### ✅ Paso 1: Firestore Rules (OBLIGATORIO)

1. Ve a: **Firebase Console → Firestore Database → Rules**
2. Reemplaza TODO el contenido con:

```firestore-rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

3. Click en **"Publicar"**
4. Espera a que se actualice (toma ~1-2 minutos)

⚠️ **IMPORTANTE**: Esto es solo para DESARROLLO. En producción usa autenticación real.

---

### ✅ Paso 2: Verificar Estructura en Firestore

Tu colección `mecanicos` debe tener estos campos:
- `nombre_completo` (string) ← **Requerido**
- `correo` (string) ← **Requerido**
- `telefono` (string) ← **Requerido**
- `dni` (string) ← **Requerido**
- `especialidad` (string) ← **Requerido**
- `estado` (string) → valores: **"activo"** o **"inactivo"**
- `fecha_ingreso` (timestamp) - Auto-generado
- `id_mecanico` (string) - Opcional

---

### ✅ Paso 3: Verificar Consola del Navegador

**Abre tu navegador:**
1. Press `F12` o `Ctrl + Shift + I`
2. Ve a la pestaña **"Console"**
3. Busca mensajes que empiezan con: `✅`, `❌`, `📡`, `💾`, etc.

**Verifica que ves algo como esto:**
```
🚀 Inicializando MecanicosComponent
📋 ngOnInit: Cargando mecánicos...
📡 cargarMecanicos: Suscribiendo a cambios en Firestore...
📡 Intentando conectar a Firestore...
✅ Snapshot recibido: 3 documentos
```

---

## 🆘 CÓDIGOS DE ERROR COMUNES

### ❌ Error: "Error al cargar los mecánicos"

**Causa**: Las reglas de Firestore no permiten lectura

**Solución**:
1. Publica las reglas correctas (Paso 1)
2. Espera 2-3 minutos
3. Recarga la página con `Ctrl + F5` (caché duro)
4. Verifica en Console que dice `✅ Snapshot recibido`

---

### ❌ Error: "Error al guardar"

**Causa**: Las reglas no permiten escritura O el formulario tiene datos inválidos

**Solución**:
1. Verifica que las reglas estén publicadas
2. En Console, busca mensajes como:
   - `⚠️ Formulario inválido` → Revisa campos requeridos
   - `❌ Error: permission-denied` → Reglas de Firestore
   - `❌ Error: invalid-argument` → Campo con tipo incorrecto

3. Copia el error exacto de la consola y búscalo aquí abajo

---

### ❌ Error: "permission-denied"

**Causa**: Reglas de Firestore no están publicadas correctamente

```console
❌ Error al guardar mecánico: {
  "code": "permission-denied",
  "message": "Missing or insufficient permissions"
}
```

**Solución**:
- Ve a Firebase → Firestore → Rules
- Asegúrate de que dice `allow read, write: if true;`
- Click en **"Publicar"**
- Espera a que se actualice (verás un checkmark verde)

---

### ❌ Error: "not-found" en colección

**Causa**: La colección `mecanicos` no existe en Firestore

```console
❌ Error al cargar mecánicos: {
  "code": "failed-precondition",
  "message": "The query requires an index..."
}
```

**Solución**:
1. Ve a Firebase Console → Firestore
2. Crea la colección `mecanicos` manualmente
3. Agrega al menos 1 documento con la estructura correcta
4. Recarga la página

---

### ❌ Error: Campo vacío en tabla

**Causa**: El nombre del campo en Firestore no coincide con el código

Ejemplos:
- ❌ `full_name` (no `nombre_completo`)
- ❌ `email` (no `correo`)
- ❌ `phone` (no `telefono`)

**Solución**:
- En Firestore, los campos deben ser exactamente:
  ```
  nombre_completo
  correo
  telefono
  dni
  especialidad
  estado
  ```

---

## 🐛 DEPURACIÓN AVANZADA

### Ver todos los logs

En la Console, paste esto:
```javascript
// Ver todos los documentos de mecánicos
console.log('Documentos en Firestore:', db.collection('mecanicos').get());
```

### Verificar conectividad Firebase

```javascript
// En Console del navegador:
import { getFirestore } from 'firebase/firestore';
const db = getFirestore();
console.log('Firestore inicializado:', db);
```

### Resetear datos de prueba

Si todo está fallando, agrega un mecánico manualmente en Firebase:

```json
{
  "nombre_completo": "Luis García Pérez",
  "correo": "luis@test.com",
  "telefono": "987654321",
  "dni": "73506894",
  "especialidad": "Motor",
  "estado": "activo"
}
```

---

## ✅ VERIFICACIÓN FINAL

Cuando todo funciona, deberías ver en Console:

```
🚀 Inicializando MecanicosComponent
📋 ngOnInit: Cargando mecánicos...
📡 cargarMecanicos: Suscribiendo a cambios en Firestore...
📡 Intentando conectar a Firestore...
✅ Snapshot recibido: 1 documentos
📄 Documento: {
  id: "abc123...",
  nombre_completo: "Luis García Pérez",
  correo: "luis@test.com",
  ...
}
✅ Datos recibidos del servicio: 1 mecánicos
```

---

## 📞 CONTACTO CON SOPORTE FIREBASE

Si nada funciona:

1. **Console de Firebase**: https://console.firebase.google.com/
2. **Proyecto**: mecanica-luchito-daebe
3. **Pestaña**: Firestore Database → Rules
4. **Support**: https://firebase.google.com/support

---

**Última actualización**: 2024-06-12  
**Versión**: 1.0
